class CreateApiV1Beliefsystems < ActiveRecord::Migration
  def change
    create_table :api_v1_beliefsystems do |t|
      t.string :name
      t.text :description
      t.string :core
      t.text :tenants
      t.text :tags
      t.text :repository

      t.timestamps
    end
  end
end
