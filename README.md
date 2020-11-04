# Emagi Front-End - Part 2

Welcome back! At the end of Part 1, we got `encodeWord` to work on a basic level and used it to map over the user's words, returning an array we could `.join` into a sentence back to them.

But our `encodeWord` isn't quite done yet. It still can't handle uppercased letters or non-letters like spaces or numbers. And, even more importantly, we are currently running only our encoding feature OR our translation feature.

So let's fix those!

### Picking Features

First thing's first. Let's lay down a framework for choosing between these two features, and then from there we can add more features easily.

1) The first thing is to rework our UI a little. Instead of the user typing in:

```sh
node main.js cry in your fries
```

with us having no way of knowing whether they want to translate or encode, we want them to be able to pick and choose which one they want in a format like this:

```sh
node main.js translate cry in your fries
```

or

```sh
node main.js encode cry in your fries
```

**So what index would that `encode` or `translate` command come in?** Once you've counted that correctly, save that to a variable, maybe called `command`.

2) Since our user's command should NOT be part of the sentence we work on--we don't want to translate `translate cry in your fries`!--we'll want to change our `.slice` starting index to be one later.

3) Now that we have a `command` and a sentence to work on, we'll want to use the first one to tell where to pass the second.

You can do this with an `if`/`else if` chain, but it will get rather long when we start adding many more features. Since this is a situation where we're comparing one value to a small fixed set of potential values, it's a perfect use case for `switch`.

But either way, what we want is to say that if our command is the string `encode`, run our encoding code (mapping over the array with `encodeWord` and then printing out the `join`-ed version), and if it's the string `translate`, print out the result of all that translation code (again, remembering to `.join` it back into a string!).

4) This is a great place to start planning for incorrect uses of our app. Add an `else` (or `default` if using switch) in case they don't write `translate` or `encode` and tell them what their options are. We can update this to include any features we add as we add them.


### The Encoding Edge Cases

What do we do if they try to encode `plan 9 from outer space`? What about `Colin`? Both of these would not work right now. Fortunately, we can fix it, especially thanks to our tests.


##### Case Insensitivity Training

The easier one is case. Right now, we're comparing each emoji's `letter` property to our `char`. Instead, let's compare it to the `.toLowerCase`-d `char`. Bam. That should pass one more test.


##### Dealing With Non-Letter Characters

... is much harder. There are two ways we can go about it, using a boolean to track if we've hit a letter or using `.map`. You can do EITHER of the two below:


###### Using A Boolean

If you solved this using an inner for loop, then where can you say for certain that you haven't found a match and added a symbol to the result? If you do it inside the inner loop, you may simply not have reached a match yet. If you do it outside the loop, how do you know whether your `result += emoji.symbol` line executed or not? There's no part of the code that you reach or don't reach based on whether you found a match, so you'll need to keep track manually. With a boolean variable!

1) For every character in the word you've been given, create a variable (using `let`, because we'll have to change it!) that will track whether we found a match or not. A popular name for a variable like this is `found`; let's go with that. Set it to `false`, because we haven't found a match yet.

2) Now, if you find a match, in addition to adding to our result string, let's reassign `found` to be `true`.

3) Below that inner `for` loop, check if that `found = true` line ever executed by checkign the value of `found`. If we ever found a match, `found` should be `true`, and our job is done. But if `found` is `false`, we must have gone through the whole emoji list and never found a matching character, so we're dealing with a ',' or a number or some other non-alphabetic character. In that case, we never appended an emoji to the string, and we can instead append the character we're on instead.


###### Using `.map`

Instead of an outer `for` loop, we could instead have used a `.map`. What we want to do is:

1) Create a variable for a new array of each character in the given word. Use `.split`, and pass in an empty string; this tells `.split` to make an array where every single character in the string should be its own element.

2) Now we can return the result of calling `.map` on that array, and we'll pass in a helper function that cean deal with each character in the word. This helper function (declared and named above or put anonymously inline in the `.map` call) will take in one character and return either a matching emoji symbol or just the character if there's no match.

3) Now, in our helper function, we'll need to loop through our emojis and look for a match for the given character. If we find it, return its symbol.

4) One clear advantage of using a `.map` here is that we're returning an answer if we find one. That means that if we're _below_ that loop, we know for sure that we never found a match (we would have returned and stopped executing the helper function if we had). So knowing that, below the `for` loop, we can simply return our character. Look ma, no booleans!


##### Trying It Out

Whichever one you did, you should be passing the test for non-alphabetic characters. But if you want to test it manually, just try something like `emojis 4 lyfe` and see if that `4` shows up in the result.


### Conclusion

We've fixed up our features and opened things up for more features down the road. In Part 3, we'll play around with filtering the data and grabbing random emojis and oh just a bunch of awesome features. Stay tuned!
