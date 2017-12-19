class SongsController < ApplicationController
  def index
    @songs = Song.all
    
  end

  def new
    @song = Song.new
    
  end
  
  def create
    @song = Song.create(title: params[:song][:title], runtime: params[:song][:runtime])
    redirect_to song_path(@song)
  end

  def show
    @song = Song.find(params[:id])
  end

  def edit
    @song = Song.find(params[:id])
  end
  
  def update 
    @song = Song.find(params[:id])
    @song.update(title: params[:song][:title], runtime: params[:song][:runtime])
    redirect_to song_path(@song)
  end 
end
