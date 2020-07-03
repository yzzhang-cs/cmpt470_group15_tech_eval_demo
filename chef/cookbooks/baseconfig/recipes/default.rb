# Make sure the Apt package lists are up to date, so we're downloading versions that exist.
cookbook_file "apt-sources.list" do
  path "/etc/apt/sources.list"
end
execute 'apt_update' do
  command 'apt-get update'
end

# Base configuration recipe in Chef.
package "wget"
package "ntp"
cookbook_file "ntp.conf" do
  path "/etc/ntp.conf"
end
execute 'ntp_restart' do
  command 'service ntp restart'
end

# Install npm
package "npm"
# Update npm
execute 'update npm' do
  command 'sudo npm install -g n && sudo n stable'
end

# Install ember
execute 'npm install ember-cli' do
  command 'sudo npm install -g ember-cli'
end

# Fix config permission
execute 'fix config permission' do
  command 'mkdir -p /home/vagrant/.config ; chmod 777 /home/vagrant/.config'
end

# Build ember app
execute 'ember build' do
  user 'vagrant'
  environment ({'HOME' => '/home/vagrant'})
  cwd '/home/vagrant/project'
  command "sudo npm install && ember build"
end


# Install nginx
package "nginx"
# Copy nginx default config to the vm
cookbook_file "nginx-default" do
  path "/etc/nginx/sites-available/default"
end
# Reload nginx
execute 'reload_nginx' do
  command 'sudo nginx -s reload'
end

