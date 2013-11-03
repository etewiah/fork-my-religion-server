namespace :nginx do
  desc "Install latest stable release of nginx"
  task :install do
  #ED removing restriction to web roles
  # , roles: :web do
    # --yes option stops prompts to hit enter..
    run "#{sudo} add-apt-repository ppa:nginx/stable --yes"
    run "#{sudo} apt-get -y update"
    run "#{sudo} apt-get -y install nginx"
  end
  after "deploy:install", "nginx:install"

  desc "Setup nginx configuration for this application"
  task :setup do
  #ED removing restriction to web roles
  # , roles: :web do
    template "nginx.conf.erb", "/tmp/nginx_conf"
    run "#{sudo} mv /tmp/nginx_conf /etc/nginx/sites-enabled/#{application}"
    # run "#{sudo} rm -f /etc/nginx/sites-enabled/default"
    # restart
  end
  after "deploy:setup", "nginx:setup"
  
  %w[start stop restart].each do |command|
    desc "#{command} nginx"
#ED removing restriction to web roles
    task command do
    # , roles: :web do
      run "#{sudo} service nginx #{command}"
    end
  end
end
