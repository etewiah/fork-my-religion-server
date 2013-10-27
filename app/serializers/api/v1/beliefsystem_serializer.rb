class Api::V1::BeliefsystemSerializer < ActiveModel::Serializer
  attributes :id,:core, :description, :name, :repository, :tags, :tenants
end
