# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160131151330) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendars", force: :cascade do |t|
    t.string   "display_name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "calendars", ["display_name"], name: "index_calendars_on_display_name", using: :btree

  create_table "events", force: :cascade do |t|
    t.string   "title"
    t.datetime "start_time",  null: false
    t.datetime "end_time",    null: false
    t.text     "event_type"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "calendar_id"
  end

  add_index "events", ["title"], name: "index_events_on_title", using: :btree

  create_table "events_house_members", id: false, force: :cascade do |t|
    t.integer "event_id",        null: false
    t.integer "house_member_id", null: false
  end

  add_index "events_house_members", ["event_id", "house_member_id"], name: "index_events_house_members_on_event_id_and_house_member_id", using: :btree
  add_index "events_house_members", ["house_member_id", "event_id"], name: "index_events_house_members_on_house_member_id_and_event_id", using: :btree

  create_table "house_members", force: :cascade do |t|
    t.string   "first_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "house_members", ["first_name"], name: "index_house_members_on_first_name", using: :btree

  add_foreign_key "events", "calendars"
end
