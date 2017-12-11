require_relative './config/environment'


class Application

  def call(env)
    req = Rack::Request.new(env)
    if req.path == "/doctors"


        html_string = "<ul>"
        Doctor.all.each do |doc|
          html_string += "<li>#{doc.name}</li>"
        end
        html_string += "</ul>"
        return [200, { "Content-Type" => "text/html"}, ["<p>Hello Doctors</p>#{html_string}"]]
        puts "Showing doctors"
    elsif req.path == "/patients"

    else
        puts "Maybe Favicon"

      # 404
    end
  end
end
