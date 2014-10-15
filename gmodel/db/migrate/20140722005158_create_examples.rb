class CreateExamples < ActiveRecord::Migration
  def change
    create_table :examples do |t|
      t.text :content
      t.integer :user_id

      t.timestamps
    end
  end
end
