# Coding-Prototype
By Amanda Murch (2408150), Baar Bisiriyu (2402096), Freddie (2410024), River Jackson (2405892), Velvet Martin (2403985)

![Rat Attack! (1)](https://github.com/zmwf129/epic-win-side-scroller/assets/149950646/545e6732-169d-46c7-aca2-75c18da4b506)

## AESTHETIC
Rat Attack! has a pixel art style inspired by 2D platformer Toxic 2, as well as Undertale. The assets for Rat Attack! bare a strong resemblance to the aforementioned games (see all pngs in the project). See the image above for more sources of inspiration.

## OVERVIEW
Rat Attack! is a 2D side-scroller in which you play as an exterminator tasked with neutralizing the out-of-control rat infestation in the city sewers. Something is wrong with these rats - the deeper you go, the weirder they get. Fight through the rabid vermin and discover the source of their power.

## GAME DESIGN
### Mechanics
- You cannot progress to the next level until all rats on current level have been exterminated
- Move with WASD, shoot with spacebar (we are still working on the shooting mechanic). Different enemies will require a different number of shots taken to be killed.
- Enemies don’t follow the player, but move back and forth within a small boundary (up and down or side to side)
- Enemies get stronger and fewer as you progress through the levels (getting closer to the source of nuclear waste)
### Layout
LEVEL 1:
- Normal rats (not evolved), numerous but weak enemies
- Sewers appear normal - brown/black water, rubbish

LEVEL 2:
- Beefy, bloody rats, fewer in number but stronger (require more shots to kill)
- Sewers show signs of nuclear waste - neon green seeping into water, biohazard signs, corroded pipes

LEVEL 3:
- Final level is a room at the end of a tunnel
- Rat king, AKA final boss, lives there protecting the pile of nuclear waste - the source of their power!!!

## NARRATIVE
The player begins the game in a normal-looking sewer. They fight rats--normal ones, at first--as they move through the sewers. As the game progresses, the player encounters stranger, more aggressive rats. They have been exposed to something that has caused major mutations, making them stronger and larger than normal rats. Finally, the player encounters the rat king, the final boss and strongest of all the rats. The player discovers that the rats have been mutating because of nuclear waste that has been buried underground. The rat king protects the nuclear waste with his life, as it is the source of his great power. To win the game, the player must defeat the rat king and seal the nuclear waste.
## INDIVIDUAL CONTRIBUTIONS
Amanda: 
- Details of game conceptualization (regarding layout and levels), e.g. three levels with gradually stronger, but fewer enemies, with one final boss at the end, where it is revealed that the mutated rats have been drawing their power from improperly disposed nuclear waste. Worked with River to determine the details of where and how assets will be used in the game. Regularly advised members about how assets could be better designed to reflect the narrative.
- Added code to implement starting and game won screens created by Baar based on my code from a previous project. Even with the code added and the console not returning any errors, I am unsure how to implement different screens in a game of this scale. The code for the various screens has since been commented out.
- Composed and produced a theme for the game using Logic, using ideas and feedback from project members to come up with the tone of the theme. While making the song, I was constantly thinking about how the sounds used could reflect and enhance the narrative of the game (for example, using pitched-down cowbell SFX to simulate the sound of banging pipes, applying bitcrush distortion to match the 8-bit style of the game, and adding zappy sounds reminescent of the shooting mechanic). I will attach the Logic file here so that the track can be viewed individually. Used preload and custom function backgroundMusic() to play audio in the browser. Had some issues with audio loading, toubleshooted the problem by adding a specific line to index.html, with advice from Velvet.
- Created moodboard and wrote README (with the exception of the following writing).

Baar:
- Although I did not contribute to the code, I conceptualised the RPG format and basic level design of the entire game; for instance, I came up with the idea of the player being able to walk on interconnected pipes that are on top of lakes of sewer water/nuclear waste, as well as concrete platforms.
- I was responsible for all of the game screens, which can be viewed in the ‘Gamescreens’ folder in the Assets folder. This was a challenging process, not only because of the process of creating animations/gifs for each screen with precise frame placements and timing, but because I had to create my own original assets exclusively for these screens. My group, Amanda particularly, had advised that I should do a similar pixel art aesthetic to that of the level design and game sprites, and the games that inspired this project, such as Undertale and Toxic 2. I soon found making pixel art to be difficult, due to the different shades of a singular colour required to make the art as detailed as possible; I took note of this from the sprites Freddie made. Due to my inexperience in designing pixel art, as well as time constraints, I decided to forgore adding details to instead focus on animations that would grab players’ attention. However, for two assets that were particularly hard to make, which were the nuclear waste can in the start screen, and the clouds in the end screen, I had used stock images and edited them into a pixelated format (originals: https://i2-prod.gloucestershirelive.co.uk/incoming/article2519537.ece/ALTERNATES/s1200e/2_115005943.jpg, https://stock.adobe.com/search/images?k=pixel+clouds&asset_id=491617051). 
- I implemented the animations in a way that increases players’ interests; in the start screen, not only is there an opening animation containing a core part of the game’s concept (nuclear waste), there’s a gif of the ‘Press Enter’ title to signal to players what the required function to play is. Furthermore, I made an animation for the instructions screen which demonstrates the requirement of pressing ‘spacebar’ to attack the enemies, although in a more detailed fashion compared to the actual game to intrigue for the gameplay.
- Things I wish I had improved on if there was more time was making the pixel assets more detailed, as well as adjusting each screen to the canvas of the game to make them simpler to implement; I also would’ve included an animation for the enemies dying.


Freddie:
- Used an array to create a shooting mechanic that adds an additional level of interactivity into the game. The bullets fire when the Spacebar is pressed and they travel in the direction the player is facing until they leave the map.
  - Added a mechanic to remove the bullets when they exit the screen to prevent lag.
  - Bullets are centered within the tilemap, meaning they will always visually collide with the rats.
- Miscellaneous graphic design - created a few assets and sound effect where needed.
- Troubleshooting various different things, for example the games movement breaking repeatedly and the bullets not displaying.
  
River: 
- Contributed to the narrative and layout of the game during conceptualisation, e.g. takes place in the sewers with one final boss at the end. Worked with Amanda to create the main narrative.
- Created and added the assets (acid, pipes and sprites), created the collisions on the tilemap so the player can't walk onto the acid, made it so the sprite would face the direction the player inputed (W is forward), started to create the enemy class, added the player assets to the code so the assets would appear and be controllable. 
- Added player collisions (collison box + variables etc).
- Worked with Velvet to create a basic rendition of the Rat/Enemy class where the rats would appear at random on the tile map. 
- Made it so the rats spawn in the center of the tiles.
- Made it so the rats spawn randomly on the tile map while not being able to spawn on the tiles labelled 1.
- Made it so the rats face random directions when they spawn.

Velvet: 
- Researched and implemented variables for a score system and displayed the text over the tilemap.
- Helped fix bugs such as the rat class, as the rat variables were causing issues and stopping the game from working, so I had to rename the 'EnemyLvl' to 'Rat' and renamed the variables underneath the class such as speed etc, which managed to make it work.
- I worked with River on the rat class and I managed to display the rats after river displayed them as ellipses as a placeholder, where I managed to get the texture asset to display on the screen.

