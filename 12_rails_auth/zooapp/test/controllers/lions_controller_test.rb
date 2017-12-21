require 'test_helper'

class LionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lion = lions(:one)
  end

  test "should get index" do
    get lions_url
    assert_response :success
  end

  test "should get new" do
    get new_lion_url
    assert_response :success
  end

  test "should create lion" do
    assert_difference('Lion.count') do
      post lions_url, params: { lion: { name: @lion.name, user_id: @lion.user_id } }
    end

    assert_redirected_to lion_url(Lion.last)
  end

  test "should show lion" do
    get lion_url(@lion)
    assert_response :success
  end

  test "should get edit" do
    get edit_lion_url(@lion)
    assert_response :success
  end

  test "should update lion" do
    patch lion_url(@lion), params: { lion: { name: @lion.name, user_id: @lion.user_id } }
    assert_redirected_to lion_url(@lion)
  end

  test "should destroy lion" do
    assert_difference('Lion.count', -1) do
      delete lion_url(@lion)
    end

    assert_redirected_to lions_url
  end
end
