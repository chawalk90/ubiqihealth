class AddAttributesToTables < ActiveRecord::Migration
  def change
  	#add_column :table_name, :attribute_name, :data_type
  	add_column :users, :username, :text
  	add_column :tweets, :content, :text
  	add_column :tweets, :user_id, :integer
  end
end
