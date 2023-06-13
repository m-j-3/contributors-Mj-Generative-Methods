# A9: Hand Tracking

## Your name

Michael Allen

## Your Glitch link

[my page](https://michael-allen-a1.glitch.me)

## Describe the experience you designed

I designed an experience of the ml model that tries to predict how many fingers you are holding up in each hand and then it should tell you the sum total of the fingers you are holding up

## For each hand gesture it responds to, what does it do?

Each time you change the amount of fingers you hold up it adjusts the count by either adding or subtracting the amount that changes, i.e. for however many fingers you are holding up it should predict how many fingers you are holding up

## How are you visualizing or changing graphics with the gesture?

I am visualizing the prediction by displaying the number of fingers each hand is showing up on each hand, and then I have text centered that should tell the total amount of fingers.

## What gestures mentioned in the Lingthusiasm podcast are related to your gestures?

"One word one gesture" is related to my gestures because here there's one word that corresponds to one gesture when people try to indicate numbers with the amount of fingers they are holding up.

## How long did it take to train your network with this Handsfree-handtracking approach?

It took me quite a while mainly because originally I was going for training every permutation of 0 to 10 fingers but then I ran into issues with storage so I ended up changing it to try to predict the amount by summing the prediction of both hands so I only needed to record the permutations of 0 to 5.

## Which gestures did it guess wrong and when? What could have improved that training data?

It mainly guesses 1 and 0 and sometimes 3 right it tends to guess 2 4 and 5 incorrectly,
having more storage available to be able to take longer recordings and give the ML more data and better and longer data would have improved the training data

## How long did it take to train the network with the Teachable Machine pixel-based approach?

8 minutes

## How did the quality of predictions compare between them?

The teachable machine is much much better at predicting

## How did the quality of predictions on Teachable Machine change when you changed the background or lighting?

The darker the room the harder it is for it to predict which makes sense given that it is probably harder to detect difference between moving objects and the pixels the share in darker light than brighter light.

## List any resources (code, images, etc) you've used, and where you got them from

Starter code from Kate.

## List any help you got from classmates or websites, so that you can remember it for later

p5js.org
