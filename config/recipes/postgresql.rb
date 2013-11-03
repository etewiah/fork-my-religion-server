# https://github.com/mattdbridges/capistrano-recipes/blob/master/postgresql.rb
set_default(:postgresql_host, "localhost")
set_default(:postgresql_user) { "#{pg_db_user}" }
set_default(:postgresql_password) { Capistrano::CLI.password_prompt "PostgreSQL Password: " }
set_default(:postgresql_database) { "#{pg_db_name}" }

namespace :postgresql do
  desc "Install the latest stable release of PostgreSQL."
  task :install, roles: :db, only: {primary: true} do
    run "#{sudo} add-apt-repository ppa:pitti/postgresql"
    run "#{sudo} apt-get -y update"
    run "#{sudo} apt-get -y install postgresql libpq-dev"
  end
  # after "deploy:install", "postgresql:install"

  desc "Drop database for this application."
  task :drop_database, roles: :db, only: {primary: true} do
    run %Q{#{sudo} -u postgres psql -c "drop database #{postgresql_database};"}
    run %Q{#{sudo} -u postgres psql -c "drop user #{postgresql_user};"}
  end

  desc "Create a database for this application."
  task :create_database, roles: :db, only: {primary: true} do
    # run %Q{#{sudo} -u postgres psql -c "create user #{postgresql_user} with password '#{postgresql_password}';"}
    run %Q{#{sudo} -u postgres psql -c "create database #{postgresql_database} owner #{postgresql_user};"}
  end
  # after "deploy:setup", "postgresql:create_database"

  desc "Generate the database.yml configuration file."
  task :setup, roles: :app do
    run "mkdir -p #{shared_path}/config"
    template "postgresql.yml.erb", "#{shared_path}/config/database.yml"
  end
  # after "deploy:setup", "postgresql:setup"

  desc "Symlink the database.yml file into latest release"
  task :symlink, roles: :app do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
  end
  # after "deploy:finalize_update", "postgresql:symlink"
end

# below is now in base.rb
# def template(from, to)
#   erb = File.read(File.expand_path("../templates/#{from}", __FILE__))
#   put ERB.new(erb).result(binding), to
# end

# def set_default(name, *args, &block)
#   set(name, *args, &block) unless exists?(name)
# end

# namespace :deploy do
#   desc "Install everything onto the server"
#   task :install do
#     run "#{sudo} apt-get -y update"
#     run "#{sudo} apt-get -y install python-software-properties"
#   end
# end
