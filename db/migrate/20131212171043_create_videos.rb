class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.integer :compilation_id
      t.string :video_url
      t.string :seq_id

      t.timestamps
    end
  end
end
