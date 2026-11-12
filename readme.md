# The Official Vexruna Website
## Overview
This is my personal portfolio website.

The site is built using ``react``, ``typescript`` and ``three.js``.
## Idea
The site will be using 3D models aligned to center-right side of the viewport.

On the left side there will be a navigation column of **home**, **projects** and **about** categories and more.

Clicking those categories will open a list of website sections that can be vertically scrolled.
You can go back to the main list by clicking the back button.

Scrolling or clicking those sections will also scroll the center of the screen by snapping between those entries instead of slowly dragging the text up and down.

Center of the screen will contain text of the selected section.

The home tab will have a brief introduction describing who I am and what I do with a rotating business card with my logo on it displayed next to it.

Projects tab will be a list of things I worked on, either by accompanied with a unique model or with a playing card designed after the project it describes (e.g. [Coven of the Hexmoon](https://github.com/Coven-of-the-Hexmoon) is a tarot card with its logo on the back).

About section tells about the website with links to my socials and this GitHub repository.
For its model I am considering using a radio transmitter.

In the future, for my discography tab the model will be a functioning oscilloscope with the list containing cover art images and titles. Clicking them would play the songs and albums.

## Dev Roadmap
My development strategy can be summarized like this: 
1. ~~Make a sketch of the layout in Krita.~~ 
![Sketch](sketch.png)
2. Make a primitive copy of the sketch in my tech stack.
3. Fill out the text fields of the home tab by giving it a title, a tagline and a directive.
4. Make my first project entry with a title and description
5. Add necessary javascript to make button navigation function
6. Add Three.js spinning cube canvas where it is supposed to be
7. Make a custom model and material and replace the cube
8. Use multiple models or use different materials on the same model for other entries

