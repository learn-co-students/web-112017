require_relative "../general_thing"

describe "is_palindrome" do
  it "returns true if given palindrome" do
    expect(is_palindrome("abcba")).to eq(true)
  end

  it "returns false if given not palindrome" do
    expect(is_palindrome("abcd")).to eq(false)
  end

  it "acknowledges strings with more than one word" do
    expect(is_palindrome("a man nam a")).to eq(true)
    expect(is_palindrome("a man a plan a canal panama")).to eq(true)
    expect(is_palindrome("a man")).to eq(false)
  end

  it "acknowledges palindromes despite case" do
    expect(is_palindrome("Racecar")).to eq(true)
  end

  it "acknowledges accents" do
    expect(is_palindrome("á man a plan a canal panamá")).to eq(true)
  end

  it "care about punctuation" do
    expect(is_palindrome("a man, a plan, a canal, panama!")).to eq(false)
  end

  it "raises an error when given an empty string" do
    expect { is_palindrome("") }.to raise_error(StandardError)
  end

  it "raises an error when given an non-string" do
    expect { is_palindrome(3) }.to raise_error(StandardError)
  end
end

describe "factorial" do
  it "provides the proper factorial" do
    expect(factorial(4)).to eq(24)
    expect(factorial(3)).to eq(6)
  end

  it "always returns a int" do
    expect(factorial(4)).to be_instance_of(Fixnum)
    # THIS ACTUALLY SUCKS IN RUBY 2.3.3 BUT I DON'T WANT TO FIX IT NOW
  end

  it "should return 1 when given 0" do
    expect(factorial(0)).to eq(1)
  end

  it "raises an error when given a non-integer" do
    expect { factorial(2.3) }.to raise_error(StandardError)
  end

  it "raises an error when given a negative integer" do
    expect { factorial(-1) }.to raise_error(StandardError)
  end
end
