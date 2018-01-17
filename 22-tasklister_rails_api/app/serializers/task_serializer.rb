class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :priority, :list_name

  def list_name
    if object.list_id == 1
      return 'Wednesday'
    end
  end
end
