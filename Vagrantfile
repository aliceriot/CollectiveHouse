# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/wily32"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "private_network", ip: "192.168.33.10"

  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant", nfs: true, nfs_export: true

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "1024"
    vb.cpus = 2
  end

  config.vm.provision :shell, privileged: true, inline: <<-SCRIPT
    sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -

    apt-get -y update
    apt-get -y upgrade

    apt-get -y install git build-essential nodejs-legacy npm cmake ruby-build silversearcher-ag postgresql-9.3 postgresql-server-dev-9.3 postgresql-contrib-9.3 libyaml-dev sqlite3 autoconf libgdbm-dev libncurses5-dev automake libtool bison pkg-config libffi-dev libpq-dev
    sudo -u postgres createuser --superuser vagrant
  SCRIPT

  config.vm.provision :shell, privileged: false, inline: <<-SCRIPT
    echo "\n\nconfiguring ruby/rails environment..."
    git clone https://github.com/aliceriot/beauvoir-utils ~/beauvoir-utils
    gpg --keyserver pgp.mit.edu --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    curl -sSL https://get.rvm.io | bash -s stable
    source ~/.rvm/scripts/rvm
    rvm install ruby-2.2.3
    rvm use ruby-2.2.3
    rvm rvmrc warning ignore allGemfiles
    cd /vagrant
    gem install bundler
    bundle install --full-index -j4
    source ~/.profile

    bundle exec rake db:setup
    bundle exec rake db:migrate
    bundle exec rake db:migrate RAILS_ENV="test"
    echo "cd /vagrant" >> ~/.profile
    echo "done."

    echo "alias dbmigrate='bundle exec rails db:migrate && bundle exec rails db:migrate RAILS_ENV="test"'" >> ~/.bashrc
    echo "alias runspec='bundle exec bin/rspec'" >> ~/.bashrc
    echo "alias serve='bin/rails s -b 0.0.0.0'" >> ~/.bashrc
  SCRIPT
end
