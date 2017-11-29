require 'bundler'
Bundler.require

DB = {
  conn: SQLite3::Database.new('db/listr.db'),
  name: 'Twitter'
}

DB[:conn].results_as_hash = true

# DB[:conn].execute("DROP TABLE IF EXISTS posts")
# DB[:conn].execute("DROP TABLE IF EXISTS authors")


post_sql = <<-SQL
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    content TEXT
  )

SQL
DB[:conn].execute(post_sql)


author_sql = <<-SQL 
  CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY,
    name TEXT
  )

SQL

DB[:conn].execute(author_sql)

ActiveRecord::Base.establish_connection(
  {
    adapter: 'sqlite3',
    database: 'db/listr.db'
  }
)


require_relative '../lib/post'
require_relative '../lib/author'

