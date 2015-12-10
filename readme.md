A basic spell checker I built over the course of roughly an hour. There are some caveats to it, however - it's initialized with an empty dictionary (as most dictionary-related APIs cost money to access, and even then are quite limited to the number of API calls you can make), but I did include the option to add any mispelled words it finds to the dictionary, which persists until reload. At that point, it'll check against the values stored in it.

I decided to build this because it causes you to think a little bit outside of the box when it comes to dealing with text. Because (at least in my experience) in most situations, you're checking for text input, you're checking for very specific values (such as 'Y' or 'N') or just any values. However, with this, since you're checking against a dictionary of text and knowing that programming languages don't treat 'A', 'a' and 'a.' the same way, you start running into the problem of word permutations. Now someone might say "Why don't you just include all permutations of capital letters in a word?" but to do that, we must assume that a capital letter could be any character in the word, if not multiple times. Due to this, the number of permutations for each word in the dictionary would start growing exponentially, especially once you start getting into larger words. 

Because of this, all words in the dictionary should be in there once and be all lowercase, and therefore, be checked against all lowercase words. Doing so is easy, as string manipulation is a simple task. This is great, but you're still not finished with the problem, as some words will include punctuation of some kind. Once again, we already have built in methods that let us find punctuation and replace it. However, one may trip up and think that you need to make all words lowercase and strip out punctuation before you do any string/array manipulation, and that's where one would run into an issue (similar to thinking that you need to check against individual factors first in a Fizzbuzz problem) as you'd end up with a paragraph without any of its original capitalization or punctuation intact in the end. 

In conclusion, I liked doing it because as I've said before, I liked the types of problems it presented - and the way it made me think about how to solve them.