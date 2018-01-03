require "pry"
def is_palindrome(s)
  if (s == "")
    raise StandardError
  end
  s_sanitized = s.gsub(" ", "").downcase
  s_sanitized == s_sanitized.reverse
end

def factorial(i)
  if (i < 0 || i.class != Fixnum)
    raise StandardError
  end
  agg = 1
  while (i > 0)
    agg = i * agg
    i -= 1
  end
  agg
end

def r_factorial(i)
  if (i == 1)
    1
  else
    i * r_factorial(i-1)
  end
end
