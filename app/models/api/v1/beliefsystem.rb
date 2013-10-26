class Api::V1::Beliefsystem < ActiveRecord::Base
  attr_accessible :core, :description, :name, :repository, :tags, :tenants

	serialize :tenants, JSON

end
