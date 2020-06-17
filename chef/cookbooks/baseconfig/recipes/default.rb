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

