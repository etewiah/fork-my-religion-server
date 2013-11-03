namespace :thin do


  desc "Setup thin configuration for this application"
  task :setup do
  #ED removing restriction to web roles
  # , roles: :web do
    # template "thin.yml.erb", "/tmp/thin.yml"
    # run "#{sudo} mv /tmp/thin.yml /etc/nginx/sites-enabled/#{application}"
    run "mkdir -p #{shared_path}/config"
    template "thin.yml.erb", "#{shared_path}/config/thin.yml"
    #ED the link needs to be done after a deployment so moved it to deploy.rb file:
    # run  "ln -nfs #{shared_path}/config/thin.yml #{release_path}/config/thin.yml"
    # run "#{sudo} rm -f /etc/nginx/sites-enabled/default"
    # restart
  end
  after "deploy:setup", "thin:setup"

  desc 'Start thin servers'
  task :start, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} &&  bundle exec thin -C config/thin.yml start", :pty => false
  end

  desc 'Stop thin servers'
  task :stop, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && bundle exec thin -C config/thin.yml stop"
  end

  desc 'Restart thin servers'
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} &&  bundle exec thin -C config/thin.yml restart"
  end

  

end
