class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.integer :compilation_id
      t.integer :seq_id
      t.string :video_url

      t.timestamps
    end
  end
end
