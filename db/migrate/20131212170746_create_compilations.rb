class CreateCompilations < ActiveRecord::Migration
  def change
    create_table :compilations do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
