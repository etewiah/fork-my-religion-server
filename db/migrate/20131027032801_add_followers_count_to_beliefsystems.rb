class AddFollowersCountToBeliefsystems < ActiveRecord::Migration
  def change
    add_column :api_v1_beliefsystems, :followers_count, :integer
  end
end
