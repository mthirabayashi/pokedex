class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  private

  # def params
  #   params.require(:pokemon).permit()
  # end
end
