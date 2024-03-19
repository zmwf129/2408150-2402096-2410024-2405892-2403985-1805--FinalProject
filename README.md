# Coding-Prototype
By Amanda Murch (2408150), Baar Bisiriyu (2402096), Freddie (2410024), River Jackson (2405892), Velvet (2403985)

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
- Details of game conceptualization (regarding layout and levels), e.g. three levels with gradually stronger, but fewer enemies, with one final boss at the end, where it is revealed that the mutated rats have been drawing their power from improperly disposed nuclear waste. Worked with River to determine the details of where and how assets will be used in the game.
- Added code to implement starting and game won screens created by Baar based on my own code from a previous project.
- Audio production (music and SFX) - Composed and produced a theme for the game using Logic, using ideas and feedback from project members to come up with the tone of the theme. Used preload and custom function backgroundMusic() to play audio in the browser. Had some issues with audio loading, toubleshooted the problem by adding a specific line to index.html, with advice from Velvet.
- Created moodboard and wrote README (with the exception of the following writing).

Baar:
- Level design - Conceptualised the RPG format and basic level design e.g. came up with the idea of the player being able to walk on interconnected pipes that are on top of lakes of sewer water, as well as concrete platforms.
- Miscellaneous graphic design - Created a potential logo for the game through photo editing software (after coming up with the name). Currently designing opening and end screens for the game with potential animations.
- Currently researching for codes that help the screen move alongside the player's movements across the screen for when the level's environments are expanded (with one currently implemented but inactive for the time being). Also attempted to implement a simplified "demo" version of the starting screen with tutorials from YouTube, but worked with Amanda to include an updated version with my own graphics.

Freddie:
- Handling enemy movment - Researching how to create and implement enemy classes. Also researching how to code enemy movement and attacks.

River: 
- Contributed to the narrative and layout of the game during conceptualisation, e.g. takes place in the sewers with one final boss at the end. Worked with Amanda to create the main narrative.
- Created and added the assets (acid, pipes and sprites), created the collisions on the tilemap so the player can't walk onto the acid, made it so the sprite would face the direction the player inputed (W is forward), started to create the enemy class, added the player assets to the code so the assets would appear and be controllable. 
- Added player collisions (collison box + variables etc).
- Worked with Velvet to create a basic rendition of the Rat/Enemy class where the rats would appear at random on the tile map. 
- Made it so the rats spawn in the center of the tiles.

Velvet: 
- Researched and implemented variables for a score system and displayed the text over the tilemap.
- Helped fix bugs such as the rat class, as the rat variables were causing issues and stopping the game from working, so I had to rename the 'EnemyLvl' to 'Rat' and renamed the variables underneath the class such as speed etc, which managed to make it work.
- I worked with River on the rat class and I managed to display the rats after river displayed them as ellipses as a placeholder, where I managed to get the texture asset to display on the screen.

