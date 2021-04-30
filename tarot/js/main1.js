$(function(){

	var app = {
		currentScreen : 1,
		selectedCardArray : [],
		animationCardArray : [],
		mobile: false,
		characters: {
	        "0": {
	        	"fname": "fool",
	            "title": "The Fool",
	            "descriptions": {
	                "0": "The fool is a symbol of new beginnings and exciting journeys. You may feel that you're ready to reinvent yourself and try new things. The dog traveling beside him symbolizes the guiding presence you feel looking out for you. His knapsack is a reminder of the baggage you carry on your journey. The mountains rising behind him depict the soaring heights you can reach if you just step forth to meet them, bold and carefree as the fool. Though your path may lead toward a cliff, like the fool you have to step off the edge to learn what's next.",
	                "1": "The fool is a symbol of new beginnings and exciting journeys. At this moment, what you want most is to get away and explore new terrain. The dog traveling beside him symbolizes a faithful companion or guiding presence. His knapsack is a reminder of the baggage you carry on your journey. The mountains rising behind him depict the soaring heights you can reach if you just step forth to meet them, bold and carefree as the fool. Though your path may lead toward a cliff, like the fool you have to step off the edge to learn what's next.",
	                "2": "The fool is a symbol of new beginnings, and you may fear the challenges ahead are too daunting. His knapsack is a reminder of the baggage you carry with you, while the mountains in the background depict the soaring heights you can reach if you just step forth to meet them. Though the fool's steps lead him toward a cliff, he's prepared to step off sure ground to risk what comes next. It is easy to fear new beginnings, particularly when the first steps take you beyond the edge of what's familiar. Face your fear to move forward.",
	                "3": "The fool is a symbol of new beginnings. You have exciting horizons ahead of you to look forward to. The dog traveling beside him symbolizes a faithful companion or guiding presence in your life. His knapsack is a reminder of the baggage you carry with you. The mountains rising behind him depict the soaring heights you can reach if you just step forth to meet them, bold and carefree as the fool. Though his steps lead him toward a cliff, he's prepared to take that step off of sure ground to risk what comes next. ",
	                "4": "The fool is a symbol of new beginnings. His knapsack is a reminder of the baggage you carry on this unknown terrain. Yours may contain something that weighs you down. Though his steps lead him toward a cliff, the fool is prepared to take that step off of sure ground to risk what comes next. While you have new horizons to explore before you, the uncertainty of the journey may hinder your confidence moving forward. You have to lighten your load and step of the cliff to go forward.",
	                "5": "The fool is a symbol of new beginnings. Your life is moving toward an exciting journey. The dog traveling beside him symbolizes a faithful companion or guiding presence watching over you. The mountains rising behind him depict the soaring heights you can reach if you just step forth to meet them, bold and carefree as the fool. Though his steps lead him toward a cliff, he's prepared to take that step off of sure ground to risk what comes next. Follow his brave path and see what lies ahead."
	            }
	        },
	        "1": {
	        	"fname": "magician",
	            "title": "The Magician",
	            "descriptions": {
	                "0": "The magician is a powerful card, filled with potential. The magician knows how to make the most of all resources at his disposal. You, too, may feel that you're drawing a wealth of power from the world around you right now. In tune with the finer points of nature, the magician is shown in a garden. Your life, like this garden, is something you can cultivate carefully to bloom and grown. His upraised hand symbolizes the connection between heaven and earth, highlighting your ability to think in a high-minded manner while keeping your feet grounded.",
	                "1": "The magician is a powerful card, filled with potential. He has all the worldly elements at his disposal and knows how to wield them to reach his own ends. You may crave this power for yourself, seeking to make sense of everything in front of you and turn it toward your purposes. In tune with the finer points of nature, the magician is shown in a garden. Your life, like this garden, is something you can cultivate carefully to bloom and grow when you possess both the necessary resources and the proper wisdom to guide your use of them.",
	                "2": "The magician is a powerful card, filled with potential. He has all the worldly elements at his disposal and knows how to wield them to reach his own ends. This card signifies latent powers that have yet to be brought to fruition. You may find that you fear your own abilities, or fear that when the time comes you won't know how to wield them properly and choose the right path. The magician is shown in a garden. Master your ability to carefully prune the garden of your life and it won't ensnare you.",
	                "3": "The magician is a powerful card, filled with potential. He has all the worldly elements at his disposal and knows how to wield them to reach his own ends. In tune with the finer points of nature, the magician is shown in a garden. Your life, like this garden, is something you can cultivate carefully to bloom and grow. His upraised hand symbolizes the connection between heaven and earth, highlighting your ability to think in a high-minded manner while keeping your feet grounded. You have great power at your disposal and will learn to command it soon.",
	                "4": "The magician is a powerful card. As with all power, it can come to ruin when not wielded properly. All the worldly elements are at your disposal, but you must use them carefully or they will only bring you trouble. The magician's upraised hand symbolizes the connection between heaven and earth, emphasizing the importance of thinking in a high-minded manner while keeping your feet grounded. The serpent bound around the magician's waist symbolizes power, but also temptation. Bound around his core, the snake keeps his power in check, reminding you to use moderation in all things.",
	                "5": "The magician is a powerful card, filled with potential. He has all the worldly elements at his disposal and knows how to wield them to reach his own ends. This card signals a powerful manifestation in your future. In tune with the finer points of nature, the magician is shown in a garden. Your life, like this garden, is something you can cultivate carefully to bloom and grow. His upraised hand symbolizes the connection between heaven and earth, reminding you to think in a high-minded manner while keeping your feet grounded as you embrace your future."
	            }
	        },
	        "2": {
	        	"fname": "high_priestess",
	            "title": "The High Priestess",
	            "descriptions": {
	                "0": "The high priestess is the bearer of knowledge. This card suggests that you feel deeply spiritual right now, and sense that a new awareness will soon come forth. The priestess card signifies communication with higher forces. The pomegranates behind the priestess symbolize the fruitfulness of your subconscious. While you may have some insightful information coming to you, it's important to temper this with respect, understanding that all may not be revealed to you at once. As the triple moon on this card shows, all things will come in good time.",
	                "1": "The high priestess is the bearer of knowledge. She has all wisdom at her disposal, and this is what you crave right now. The priestess card signifies communication with higher forces. The pomegranates behind the priestess symbolize the fruitfulness of your subconscious. While you may have some insightful information coming to you, it's important to temper this with respect, understanding that all may not be revealed to you at once. As the triple moon on this card shows, all things will come in good time.",
	                "2": "The high priestess is the bearer of knowledge. The priestess card signifies communication with your inner world. You fear some part of your life that you've been avoiding. The pomegranates behind the priestess symbolize the fruitfulness of your subconscious. The two pillars she stands between are good and evil or truth and deception. You've been out of balance, whether living too fully in the present world or secluded in your inner realm. It's time to face the side you've been avoiding.",
	                "3": "The high priestess is the bearer of knowledge. She has all wisdom at her disposal, and will soon reveal a deeper awareness to you. The priestess card signifies communication with higher forces. The pomegranates behind the priestess symbolize the fruitfulness of your subconscious. While you may have some insightful information coming to you, it's important to temper this with respect, understanding that all may not be revealed to you at once. As the triple moon on this card shows, all things will come in good time.",
	                "4": "The high priestess is the bearer of knowledge. She has all wisdom at her disposal, yet remains completely in control of who she will share it with and what she will reveal. You're struggling with the divine balance that she promotes. Situated between two pillars, the high priestess straddles the delicate line between light and dark, good and evil. You've fallen to one side or the other and need to reconcile your inner and outer worlds to restore balance. Then the priestess can bring the knowledge you seek.",
	                "5": "The high priestess is the bearer of knowledge. She has all wisdom at her disposal, yet remains completely in control of who she will share it with, and what she will reveal. The priestess card signifies communication with higher forces. The pomegranates behind the priestess symbolize the fruitfulness of your subconscious. You have some insightful information coming to you, but you must temper this with respect, understanding that all may not be revealed to you at once. As the triple moon on this card shows, all things will come in good time."
	            }
	        },
	        "3": {
	        	"fname": "empress",
	            "title": "The Empress",
	            "descriptions": {
	                "0": "There's great feminine power present in the empress. This suggests that you are currently embracing your matriarchal position, or feel that your life is under the presence of a strong female figure. The water behind her symbolizes cleansing while the wheat is a sign of abundance and fertility. The fullness of the empress may even signify pregnancy. This may not indicate a physical pregnancy in your life, but rather a situation that's pregnant with promise. ",
	                "1": "There's great feminine power present in the empress. This suggests that you're yearning for feminine comforts right now. These may come in the form of a mother figure or from within yourself when you learn to embrace your nurturing feminine traits. The water behind her symbolizes cleansing while the wheat is a sign of abundance and fertility. The fullness of the empress may even signify pregnancy. This may not indicate a physical pregnancy in your future, but rather a situation that's pregnant with promise.",
	                "2": "There's great feminine power present in the empress. Its placement here suggests that you're weary of protective female forces. Perhaps you feel smothered by a mother figure or another woman in your life. The empress is usually a benevolent force, pregnant with promise and abundance. However, you may shy away from these gifts if you feel they're being pushed on you. You may also fear embracing your own feminine side, which is essential for balance in both men and women.",
	                "3": "There's great feminine power present in the empress. This card suggests a protective female force in your life. The water behind her symbolizes cleansing while the wheat is a sign of abundance and fertility. The fullness of the empress may even signify pregnancy. This may not indicate a physical pregnancy in your future, but rather a situation that's pregnant with promise. This powerful choice suggests you are on the right path and have great things before you.",
	                "4": "There's great feminine power present in the empress. Its placement here suggests that you may have imposing feminine figures dragging you down. Perhaps you feel smothered by a mother figure or another woman in your life. The empress is usually a benevolent force, pregnant with promise and abundance. However, you may shy away from these gifts if you feel they're being pushed on you. You may also be struggling with your own feminine side, which is essential for balance in both men and women. ",
	                "5": "There's great feminine power present in the empress that's working for you right now to promote balance and harmony. This card suggests a protective female force in your life. The water behind her symbolizes cleansing while the wheat is a sign of abundance and fertility. The fullness of the empress may even signify pregnancy. This may not indicate a physical pregnancy in your future, but rather a situation that's pregnant with promise. This powerful choice suggests you are on the right path and have great things before you."
	            }
	        },
	        "4": {
	        	"fname": "emperor",
	            "title": "The Emperor",
	            "descriptions": {
	                "0": "The emperor is a symbol of power and authority. The ram in the image indicates determination and assertiveness. It is also the symbol of Aries, a sign associated with authority and leadership. The globe in the emperor's hand indicates his rule over the world, while the way he is holding it shows his concern and generosity for those he rules. The emperor card indicates that you're feeling strong and powerful. Though the weight of an important leadership position is heavy, you're prepared to approach it in a wise and balanced manner. ",
	                "1": "The emperor is a symbol of power and authority. The ram in the image indicates determination and assertiveness. It is also the symbol of Aries, a sign associated with authority and leadership. You may crave a position of leadership for yourself. The strong male presence associated with the emperor can also indicate a desire for a strong leader in your own life, whether you crave a better relationship with your father or another significant male figure.",
	                "2": "The emperor is a symbol of power and authority. The ram in the image indicates determination and assertiveness. It is also the symbol of Aries, a sign associated with authority and leadership. The Emperor is a leader, teacher, and warrior rolled into one. In this position, the card suggests you may fear a major male figure in your life. You may also feel weary of embracing the role of emperor yourself. Dealing with authority is a challenge both when you're under its control and when you bear the mantle yourself.",
	                "3": "The emperor is a symbol of power and authority. The ram in the image indicates determination and assertiveness. It is also the symbol of Aries, a sign associated with authority and leadership. The globe in the emperor's hand indicates his rule over the world, while the way he is holding it shows his concern and generosity for those he rules. The emperor card can remind you of your own strength and power when facing adversity. It also indicates that you have the capacity for a wise and well-considered rule.",
	                "4": "The emperor is a symbol of power and authority. The ram in the image indicates determination and assertiveness. It is also the symbol of Aries, a sign associated with authority and leadership. Connected to strong male figures, this card suggests a struggle with a strong male role in your life. You may have conflict with a father figure, or struggle with the idea of taking on this role yourself. Butting heads with authority can be a big problem for you.",
	                "5": "The emperor is a symbol of power and authority. The ram in the image indicates determination and assertiveness. It is also the symbol of Aries, a sign associated with authority and leadership. The globe in the emperor's hand indicates his rule over the world, while the way he is holding it shows his concern and generosity for those he rules. The emperor card can remind you of your own strength and power when facing adversity. It also helps remind us of the importance of a wise and well-considered rule. Embrace your authority and think through your decisions carefully."
	            }
	        },
	        "5": {
	        	"fname": "hierophant",
	            "title": "The Hierophant",
	            "descriptions": {
	                "0": "The hierophant is the symbol of religious knowledge. As the keeper of religious knowledge, this figure often symbolizes tradition and conformity to the expected rules. The hierophant's hand is raised in a sign of blessing. The pillars on either side of the hierophant depict balance between spiritual and secular thought. The kneeling figures before him remind us that this figure is held in a position of great honor and responsibility. This card indicates that you're currently struggling with your religious beliefs, or perhaps on the brink of a great revelation.",
	                "1": "The hierophant is the symbol of religious knowledge. As the keeper of religious knowledge, this figure often symbolizes tradition and conformity to the expected rules. The hierophant's hand is raised in a sign of blessing. The pillars on either side of the hierophant depict balance between spiritual and secular thought. You crave a deeper spiritual understanding, but may find yourself questioning your current beliefs. The hierophant acts as a link between the spiritual and material worlds and you may crave some of the understanding he has to offer.",
	                "2": "The hierophant is the symbol of religious knowledge. As the keeper of religious knowledge, this figure often symbolizes tradition and conformity to the expected rules. The kneeling figures before him remind us that this figure is held in a position of great honor and responsibility. Your fears right now revolve around your spiritual standing. Deeply consider whether you need to disentangle yourself from an unscrupulous association or organization. You may find your current spiritual path is leading you in the wrong direction and there's a major revelation ahead.",
	                "3": "The hierophant is the symbol of religious knowledge. As the keeper of religious knowledge, this figure often symbolizes tradition and conformity to the expected rules. The hierophant's hand is raised in a sign of blessing. The pillars on either side of the hierophant depict balance between spiritual and secular thought. The kneeling figures before him remind us that this figure is held in a position of great honor and responsibility. You're growing greatly in your spiritual life and have the opportunity for major revelations ahead of you. ",
	                "4": "The hierophant is the symbol of religious knowledge. As the keeper of religious knowledge, this figure often symbolizes tradition and conformity to the expected rules. The pillars on either side of the hierophant depict balance between spiritual and secular thought. The kneeling figures before him remind us that this figure is held in a position of great honor and responsibility. This card indicates a need to think on your belief system and examine how you operate within it. Something is currently holding you back.",
	                "5": "The hierophant is the symbol of religious knowledge. As the keeper of religious knowledge, this figure often symbolizes tradition and conformity to the expected rules. The hierophant's hand is raised in a sign of blessing. The pillars on either side of the hierophant depict balance between spiritual and secular thought. The kneeling figures before him remind us that this figure is held in a position of great honor and responsibility. The hierophant card is presenting you with the opportunity to gain deeper knowledge and reexamine your spiritual beliefs. "
	            }
	        },
	        "6": {
	        	"fname": "lovers",
	            "title": "The Lovers",
	            "descriptions": {
	                "0": "The lovers often come up when there's an amorous mood in the air, though they can represent the male and female duality as well. This card often depicts sunlight as a symbol of warmth and joy. It also shows the lovers in full light. Their nudity can represent letting go and sharing one's vulnerability. You currently feel secure in your relationships, both romantic and otherwise. You are also very balanced right now, honoring both male and female sides of your being. ",
	                "1": "The lovers often come up when there's an amorous mood in the air, though they can represent the male and female duality as well. This card often depicts sunlight as a symbol of warmth and joy. It also shows the lovers in full light. Their nudity can represent letting go and sharing one's vulnerability. You're craving greater depth in your relationships, though not necessarily romantic. The lovers can indicate the need to heal an emotional rift in your life. ",
	                "2": "The lovers often come up when there's an amorous mood in the air, though they can represent the male and female duality as well. This card shows the lovers in full light. Their nudity can represent letting go and sharing one's vulnerability. You may fear opening up and letting others see you as you truly are. Your fears may also center around making an important decision. The opposing male and female roles shown here are then two sides of the argument that you must choose between. ",
	                "3": "The lovers often come up when there's an amorous mood in the air, though they can represent the male and female duality as well. This card often depicts sunlight as a symbol of warmth and joy. It also shows the lovers in full light. Their nudity can represent letting go and sharing one's vulnerability. Let the lovers guide you to greater depths in your relationship, keeping careful balance always in mind. If you don't have a significant relationship in your life, the lovers may indicate that one is on the horizon. ",
	                "4": "The lovers represent not only amorous interactions, but the male and female duality. This card shows the lovers in full light. Their nudity can represent letting go and sharing one's vulnerability. You're struggling with your relationships right now, though not necessarily romantic in nature. There are important decisions that you must address. Opposing desires are making things difficult, but you must reconcile both sides of your inner self to find peace.",
	                "5": "The lovers often come up when there's an amorous mood in the air, though they can represent the male and female duality as well. This card often depicts sunlight as a symbol of warmth and joy. It also shows the lovers in full light. Their nudity can represent letting go and sharing one's vulnerability. Let the lovers guide you to greater depths in your relationships, keeping careful balance always in mind. Reconcile both sides of your dual nature to find lasting peace and satisfaction."
	            }
	        },
	        "7": {
	        	"fname": "chariot",
	            "title": "The Chariot",
	            "descriptions": {
	                "0": "The powerful chariot card indicates action and motion. It's easy to see the power behind the chariot, but it's also important to consider the skill and balance required from the charioteer. The crown of stars on his head represents the great intellect at work here. You may feel that you're driving two powerful and challenging forces before you, but you're also doing it with skill and success as you move forward.",
	                "1": "The powerful chariot card indicates action and motion. This card reminds us to approach challenges with a plan of action that will help us succeed. The charioteer does not act recklessly, but with skilled control. The crown of stars on his head represents the great intellect at work here. You're facing a difficult situation or inner conflict but desire greatly to resolve it cleanly. It's time to turn to your powerful mental facilities to find the solution for a pressing problem.",
	                "2": "The powerful chariot card indicates action and motion. It's easy to see the power behind the chariot, but it's also important to consider the skill and balance required from the charioteer. Driving a chariot is no small matter. You have a challenging situation before you with conflicting factors pulling you in different directions. Mastering the power of the charioteer seems daunting to you right now. Keep in mind that chariots often approached attack from the side rather than head on. You may need to come at the issue from a different direction.",
	                "3": "The powerful chariot card indicates action and motion. It's easy to see the power behind the chariot, but it's also important to consider the skill and balance required from the charioteer. The charioteer does not act recklessly, but with skilled control. The crown of stars on his head represents the great intellect at work here. It's time to turn to your powerful mental facilities to find the solution for a pressing problem. In this position, the charioteer suggests that you're moving forward in a positive direction. Conflicts will soon be resolved.",
	                "4": "The powerful chariot card indicates action and motion. It's easy to see the power behind the chariot, but it's also important to consider the skill and balance required from the charioteer. Driving a chariot is no small matter. The charioteer has two strong forces to control, and they may not always want to move in the direction he's guiding them. You may feel that you're at the mercy of many opposing forces in your life, as though your chariot is out of control.",
	                "5": "The powerful chariot card indicates action and motion. It's easy to see the power behind the chariot, but it's also important to consider the skill and balance required from the charioteer. Driving a chariot is no small matter. This card reminds us to approach challenges with a plan of action that will help us succeed. The charioteer does not act recklessly, but with skilled control. The crown of stars on his head represents the great intellect at work here. You're moving ahead full speed, but you should remember to stay in control of the forces around you."
	            }
	        },
	        "8": {
	        	"fname": "strength",
	            "title": "Strength",
	            "descriptions": {
	                "0": "The image on the strength card makes it clear that this selection is all about bravery and patience. The lion in the image is symbolic of primal physical needs. It is the animal nature in each of us that drives our most instinctive urges. The lion acts impulsively and without thought. Beside him is a young woman clothed in the white dress of purity. Her strength, as she strokes the lion, is not physical. Rather, she draws on a well of compassion, cunning, and patience. You've been exhibiting great moral fortitude and feel that you have tamed your wilder side.",
	                "1": "The image on the strength card makes it clear that this selection is all about bravery and patience. The lion in the image is symbolic of primal physical needs. It is the animal nature in each of us that drives our most instinctive urges. The lion acts impulsively and without thought. Beside him is a young woman clothed in the white dress of purity. Her strength, as she strokes the lion, is not physical. Rather, she draws on a well of compassion, cunning, and patience. The strength card indicates that you want to tame your inner beast.",
	                "2": "The image on the strength card makes it clear that this selection is all about bravery and patience. The lion in the image is symbolic of primal physical needs. It is the animal nature in each of us that drives our most instinctive urges. The lion acts impulsively and without thought. Beside him is a young woman who has tamed the great beast with compassion, cunning, and patience. Your great fear right now is that you will lose the battle with this inner beast.",
	                "3": "The image on the strength card makes it clear that this selection is all about bravery and patience. The lion in the image is symbolic of primal physical needs. It is the animal nature in each of us that drives our most instinctive urges. The lion acts impulsively and without thought. Beside him is a young woman clothed in the white dress of purity. Her strength, as she strokes the lion, is not physical. Rather, she draws on a well of compassion, cunning, and patience. You have mastered this inner strength and know how to wield it in your favor.",
	                "4": "The image on the strength card makes it clear that this selection is all about bravery and patience. The lion in the image is symbolic of primal physical needs. It is the animal nature in each of us that drives our most instinctive urges. The lion acts impulsively and without thought. Beside him is a young woman who draws on a well of compassion, cunning, and patience to tame the beast. The strength card can indicate a struggle with your inner beast. While it indicates challenges are ahead, it also supplies a helpful hint for how to handle them.",
	                "5": "The image on the strength card makes it clear that this selection is all about bravery and patience. The lion in the image is symbolic of primal physical needs. It is the animal nature in each of us that drives our most instinctive urges. Beside him is a young woman clothed in the white dress of purity. Her strength, as she strokes the lion, is not physical. Rather, she draws on a well of compassion, cunning, and patience. Though you're facing a struggle right now, a gentle approach and long-suffering patience will help you tame the beast."
	            }
	        },
	        "9": {
	        	"fname": "hermit",
	            "title": "The Hermit",
	            "descriptions": {
	                "0": "While the hermit appears physically alone, his isolation is actually mental. This card symbolizes higher thought that may isolate you from the rest of the world. The hermit's lantern shines with the Star of David, which shows that he's guided by faith or spiritual enlightenment. The staff in his left hand indicates control over his subconscious mind. Like the hermit, you feel that you're on a spiritual journey right now, searching your soul. Guidance is close at hand.",
	                "1": "While the hermit appears physically alone, his isolation is actually mental. This card symbolizes higher thought that may isolate you from the rest of the world. The hermit's lantern shines with the Star of David, which shows that he's guided by faith or spiritual enlightenment. The staff in his left hand indicates control over his subconscious mind. You're seeking the quiet wisdom that the hermit has mastered. Seeking your own inner truth can help you find what you're after.",
	                "2": "While the hermit appears physically alone, his isolation is actually mental. This card symbolizes higher thought that may isolate you from the rest of the world. The hermit's lantern shines with the Star of David, which shows that he's guided by faith or spiritual enlightenment. The staff in his left hand indicates control over his subconscious mind. Seeking a higher level of enlightenment is often a lonely endeavor. You may fear the isolation of the journey, or even what you may learn when you encounter your divine guide.",
	                "3": "While the hermit appears physically alone, his isolation is actually mental. This card symbolizes higher thought that may isolate you from the rest of the world. The hermit's lantern shines with the Star of David, which shows that he's guided by faith or spiritual enlightenment. The staff in his left hand indicates control over his subconscious mind. A higher spirit is reaching out to offer guidance for what lies ahead.",
	                "4": "While the hermit appears physically alone, his isolation is actually mental. This card symbolizes higher thought that may isolate you from the rest of the world. The hermit's lantern shines with the Star of David, which shows that he's guided by faith or spiritual enlightenment. The staff in his left hand indicates control over his subconscious mind. You have inner work that you must complete, but you won't be successful unless you can silence your mind and listen for spiritual guidance.",
	                "5": "While the hermit appears physically alone, his isolation is actually mental. This card symbolizes higher thought that may isolate you from the rest of the world. The hermit's lantern shines with the Star of David, which shows that he's guided by faith or spiritual enlightenment. The staff in his left hand indicates control over his subconscious mind. Though you may not be prepared to spend a lifetime on the hermit's icy peak, this card can symbolize an important season of your life that will be spent in this state."
	            }
	        },
	        "10": {
	        	"fname": "wheel",
	            "title": "The Wheel",
	            "descriptions": {
	                "0": "The wheel represents the cyclical nature of life. It is always moving from one season to the next, putting events in motion that we often have little control over. The wheel heralds a coming change. It may be a result of actions you yourself have taken, or it may be an unexpected event that ushers you into a new season of life. You can feel the winds of change blowing around you and recognize that something significant is on the horizon.",
	                "1": "The wheel represents the cyclical nature of life. It is always moving from one season to the next, putting events in motion that we often have little control over. The wheel heralds a coming change. It may be a result of actions you yourself have taken, or it may be an unexpected event that ushers you into a new season of life. You feel that your life has been stagnating and are anxious for the next turn of the wheel to bring you something new.",
	                "2": "The wheel represents the cyclical nature of life. It is always moving from one season to the next, putting events in motion that we often have little control over. The wheel heralds a coming change. It may be a result of actions you yourself have taken, or it may be an unexpected event that ushers you into a new season of life. Comfortable with your current situation, you may fear what the wheel will bring forth next. It's important to recognize that time can never stand still, and most things come about for the greater good.",
	                "3": "The wheel represents the cyclical nature of life. It is always moving from one season to the next, putting events in motion that we often have little control over. The wheel heralds a coming change. It may be a result of actions you yourself have taken, or it may be an unexpected event that ushers you into a new season of life. This auspicious card heralds something exciting on the horizon for you.",
	                "4": "The wheel represents the cyclical nature of life. It is always moving from one season to the next, putting events in motion that we often have little control over. The wheel heralds a coming change. It may be a result of actions you yourself have taken, or it may be an unexpected event that ushers you into a new season of life. You're struggling against the tides of time, but must learn to accept the inevitable turns of the wheel and do what you can to make the best of every season.",
	                "5": "The wheel represents the cyclical nature of life. It is always moving from one season to the next, putting events in motion that we often have little control over. The wheel heralds a coming change. It may be a result of actions you yourself have taken, or it may be an unexpected event that ushers you into a new season of life. The forces are already in motion to bring exciting new changes into your life, moving you to the next season."
	            }
	        },
	        "11": {
	        	"fname": "justice",
	            "title": "Justice",
	            "descriptions": {
	                "0": "The justice card shows a wise judge with balanced scales, weighing the facts and passing even and fair-minded judgments. The sword represents the cold hard facts in front of us, while the veil behind the judge illustrates that there are some things left hidden. We must make the best choice possible with the information at hand. You feel that there's a major decision being made in your life right now. Take heart – all will proceed smoothly so long as you act in honesty and fairness.",
	                "1": "The justice card shows a wise judge with balanced scales, weighing the facts and passing even and fair-minded judgments. The sword represents the cold hard facts in front of us, while the veil behind the judge illustrates that there are some things left hidden. Right now you are craving resolution from a conflict. Your scales are out of balance and justice is calling you to take action and right them.",
	                "2": "The justice card shows a wise judge with balanced scales, weighing the facts and passing even and fair-minded judgments. The sword represents the cold hard facts in front of us, while the veil behind the judge illustrates that there are some things left hidden. There are wrongs in your life that must be righted. Though you're fearful of facing up to these misdeeds, it is important to rectify any situation where you are in the wrong.",
	                "3": "The justice card shows a wise judge with balanced scales, weighing the facts and passing even and fair-minded judgments. The sword represents the cold hard facts in front of us, while the veil behind the judge illustrates that there are some things left hidden. Justice is working in your favor to guide you in upcoming conflicts. Deliberate calmly and carefully and you will come to the right conclusion.",
	                "4": "The justice card shows a wise judge with balanced scales, weighing the facts and passing even and fair-minded judgments. The sword represents the cold hard facts in front of us, while the veil behind the judge illustrates that there are some things left hidden. Rectification is needed in some area of your life. Justice is calling on you to examine your karma and right the areas that are out of balance.",
	                "5": "The justice card shows a wise judge with balanced scales, weighing the facts and passing even and fair-minded judgments. The sword represents the cold hard facts in front of us, while the veil behind the judge illustrates that there are some things left hidden. Justice will work for you when you deliberate carefully and calmly. Act fairly and do what is right, and the outcome will be in your favor."
	            }
	        },
	        "12": {
	        	"fname": "hanged_man",
	            "title": "The Hanged Man",
	            "descriptions": {
	                "0": "The hanged man is not at all what he sounds like. On this card, the man in question hangs serenely, suspended by one foot. The other leg is bent, indicating a crossroads. The hanged man is in a position of complete surrender with his hands behind his back. A halo of light around his head indicates a revelation that may soon guide his way. You feel as though you're suspended right now, unable to move forward. You're going through a major transformation but will soon come out on the other side.",
	                "1": "The hanged man is not at all what he sounds like. On this card, the man in question hangs serenely, suspended by one foot. The other leg is bent, indicating a crossroads. The hanged man is in a position of complete surrender with his hands behind his back. A halo of light around his head indicates a revelation that may soon guide his way. You may feel that your life has fallen into chaos, and you crave a moment of quiet contemplation to peacefully consider the next part of your path. ",
	                "2": "The hanged man is not at all what he sounds like. On this card, the man in question hangs serenely, suspended by one foot. The other leg is bent, indicating a crossroads. The hanged man is in a position of complete surrender with his hands behind his back. A halo of light around his head indicates a revelation that may soon guide his way. Surrendering yourself in this way can feel frightening, but letting go of material barriers to achieve a higher level of enlightenment will release you.",
	                "3": "The hanged man is not at all what he sounds like. On this card, the man in question hangs serenely, suspended by one foot. The other leg is bent, indicating a crossroads. The hanged man is in a position of complete surrender with his hands behind his back. A halo of light around his head indicates a revelation that may soon guide his way. You're on the brink of a major transformation and are prepared to let go of the material to pursue this higher path.",
	                "4": "The hanged man is not at all what he sounds like. On this card, the man in question hangs serenely, suspended by one foot. The other leg is bent, indicating a crossroads. The hanged man is in a position of complete surrender with his hands behind his back. A halo of light around his head indicates a revelation that may soon guide his way. The hanged man can indicate that you're held up by material possessions and worldly goods. Release your grip on these to move forward.",
	                "5": "The hanged man is not at all what he sounds like. On this card, the man in question hangs serenely, suspended by one foot. The other leg is bent, indicating a crossroads. The hanged man is in a position of complete surrender with his hands behind his back. A halo of light around his head indicates a revelation that may soon guide his way. You may find yourself in the position of the hanged man as you try to find your way after a loss or struggle. Submit to a higher wisdom and you will soon regain your momentum."
	            }
	        },
	        "13": {
	        	"fname": "death",
	            "title": "Death",
	            "descriptions": {
	                "0": "The death card often stops people in their tracks, but there’s no need to fear this omen. The death card rarely heralds a physical death. Instead, this card indicates that you’re on the brink of a major renewal in your life. There is no death without a new rebirth. In this position, the death card suggests that you sense a season in your life is ready to come to an end to bring about something new.",
	                "1": "The death card often stops people in their tracks, but there's no need to fear this omen. The death card rarely heralds a physical death. Instead, this card indicates that you're on the brink of a major renewal in your life. There is no death without a new rebirth. In this position, the death card suggests that you crave release from a situation that has lingered for too long. You're prepared to bid goodbye to one season of life and embrace the next.",
	                "2": "The death card often stops people in their tracks, but there's no need to fear this omen. The death card rarely heralds a physical death. Instead, this card indicates that you're on the brink of a major renewal in your life. There is no death without a new rebirth. In this position, the death card suggests that you're afraid of change. Keep in mind that something new will follow.",
	                "3": "The death card often stops people in their tracks, but there's no need to fear this omen. The death card rarely heralds a physical death. Instead, this card indicates that you're on the brink of a major renewal in your life. There is no death without a new rebirth. For you, the death card heralds an exciting new phase of life and the end to things which may have been holding you back.",
	                "4": "The death card often stops people in their tracks, but there's no need to fear this omen. The death card rarely heralds a physical death. Instead, this card indicates that you're on the brink of a major renewal in your life. There is no death without a new rebirth. You're fighting the inevitable cycles of life right now and need to release control and accept what is inevitable. Not all change is bad when you embrace the next stage of your life fully.",
	                "5": "The death card often stops people in their tracks, but there's no need to fear this omen. The death card rarely heralds a physical death. Instead, this card indicates that you're on the brink of a major renewal in your life. There is no death without a new rebirth. Events taking place right now will bring to a close one part of your life to give birth to something new."
	            }
	        },
	        "14": {
	        	"fname": "temperance",
	            "title": "Temperance",
	            "descriptions": {
	                "0": "The temperance card carries many subtle meanings. It depicts an angel with one foot in the gentle stream of our emotions while the other is anchored on the ground. In his hands, the angel holds two vessels with the elixir of life passing between them. The message of temperance is patience, moderation, and calm. You feel that you're moving peacefully along with the flow of life right now, serene to let the waters take you where they will.",
	                "1": "The temperance card carries many subtle meanings. It depicts an angel with one foot in the gentle stream of our emotions while the other is anchored on the ground. In his hands, the angel holds two vessels with the elixir of life passing between them. The message of temperance is patience, moderation, and calm. You're seeking peace as you wait serenely for the next season of your life.",
	                "2": "The temperance card carries many subtle meanings. It depicts an angel with one foot in the gentle stream of our emotions while the other is anchored on the ground. In his hands, the angel holds two vessels with the elixir of life passing between them. The message of temperance is patience, moderation, and calm. In this position, the temperance card suggests that you're struggling to try and swim against the flow. You may find yourself at a fork in the river, unsure of which path to take.",
	                "3": "The temperance card carries many subtle meanings. It depicts an angel with one foot in the gentle stream of our emotions while the other is anchored on the ground. In his hands, the angel holds two vessels with the elixir of life passing between them. The message of temperance is patience, moderation, and calm. Learn to do nothing mindfully and temperance will give you peace as you drift along to the next part of your journey.",
	                "4": "The temperance card carries many subtle meanings. It depicts an angel with one foot in the gentle stream of our emotions while the other is anchored on the ground. In his hands, the angel holds two vessels with the elixir of life passing between them. The message of temperance is patience, moderation, and calm. You struggle with doing nothing and are not a fan of waiting about. There is nothing you need to do right now, but this is a frustrating position for you. Try to relax and enjoy the flow.",
	                "5": "The temperance card carries many subtle meanings. It depicts an angel with one foot in the gentle stream of our emotions while the other is anchored on the ground. In his hands, the angel holds two vessels with the elixir of life passing between them. The message of temperance is patience, moderation, and calm. This card indicates that you need to wait mindfully for the next part of your journey to unfold."
	            }
	        },
	        "15": {
	        	"fname": "devil",
	            "title": "The Devil",
	            "descriptions": {
	                "0": "Seeing the devil card can produce something of a shock, but it's important to remember that this card is not inherently evil. Rather, it represents the things that can hold us back. The devil card is associated with ego, error, addiction, or enslavement. Something in your life is holding you back. This card's position in your reading suggests that you know what it is. Take action and you can move away from the negative.",
	                "1": "Seeing the devil card can produce something of a shock, but it's important to remember that this card is not inherently evil. Rather, it represents the things that can hold us back. The devil card is associated with ego, error, addiction, or enslavement. You may find that you're craving things you know are bad for you. An old addiction or toxic relationship could be rearing its ugly head. Though you're tempted, stay strong and turn away from these temptations.",
	                "2": "Seeing the devil card can produce something of a shock, but it's important to remember that this card is not inherently evil. Rather, it represents the things that can hold us back. The devil card is associated with ego, error, addiction, or enslavement. You fear your own flaws. Perhaps you see the wreck that an out of control ego or raging addiction can cause. Let your fear spur you to action to rid yourself of anything holding you back.",
	                "3": "Seeing the devil card can produce something of a shock, but it's important to remember that this card is not inherently evil. Rather, it represents the things that can hold us back. The devil card is associated with ego, error, addiction, or enslavement. The devil card here shows you that recognizing the things you don't like about yourself and can empower you to stop letting hang-ups hold you back.",
	                "4": "Seeing the devil card can produce something of a shock, but it's important to remember that this card is not inherently evil. Rather, it represents the things that can hold us back. The devil card is associated with ego, error, addiction, or enslavement. You're chained down right now by material things, an oversized ego, or another guilty pleasure. Let go of what is holding you back.",
	                "5": "Seeing the devil card can produce something of a shock, but it's important to remember that this card is not inherently evil. Rather, it represents the things that can hold us back. The devil card is associated with ego, error, addiction, or enslavement. The devil card is a call to wake up and reevaluate. Confront your fears and let go of negative things that are keeping you enslaved."
	            }
	        },
	        "16": {
	        	"fname": "tower",
	            "title": "The Tower",
	            "descriptions": {
	                "0": "The tower card bears an imposing image. Surrounded by seeming chaos, this images features fire, lightning, and falling figures. The lightning signifies a major jolt while the fire indicates transformation. The falling people depicted on this card can indicate a loss of stability in one's life or a fall from a high position. You know what your own personal tower is and you're realizing that it's under siege. Whether it's built of material possessions, personal guilt, or a stifling job, it's about to come falling down.",
	                "1": "The tower card bears an imposing image. Surrounded by seeming chaos, this images features fire, lightning, and falling figures. The lightning signifies a major jolt while the fire indicates transformation. The falling people depicted on this card can indicate a loss of stability in one's life or a fall from a high position. Though you know the sudden transition associated with this card can be painful, you're prepared to suffer through to break down the worn structure you've been imprisoned in.",
	                "2": "The tower card bears an imposing image. Surrounded by seeming chaos, this images features fire, lightning, and falling figures. The lightning signifies a major jolt while the fire indicates transformation. The falling people depicted on this card can indicate a loss of stability in one's life or a fall from a high position. The falling tower is quite frightening, particularly for those who are uncomfortable with change. You're afraid that your fortifications – prestige, wealth, possessions, powerful relations, or the like – won't protect you much longer.",
	                "3": "The tower card bears an imposing image. Surrounded by seeming chaos, this images features fire, lightning, and falling figures. The lightning signifies a major jolt while the fire indicates transformation. The falling people depicted on this card can indicate a loss of stability in one's life or a fall from a high position. Though this card seems negative, the significant changes that it will bring about are going to work in your favor. It's time for you to get a jolt back to reality and to take a drastic new direction.",
	                "4": "The tower card bears an imposing image. Surrounded by seeming chaos, this images features fire, lightning, and falling figures. The lightning signifies a major jolt while the fire indicates transformation. The falling people depicted on this card can indicate a loss of stability in one's life or a fall from a high position. You've sheltered behind things that were ultimately holding you back, such as wealth or a prestigious position. You're feeling the jolt of reality now and must stand without them.",
	                "5": "The tower card bears an imposing image. Surrounded by seeming chaos, this images features fire, lightning, and falling figures. The lightning signifies a major jolt while the fire indicates transformation. The falling people depicted on this card can indicate a loss of stability in one's life or a fall from a high position. The tower card indicates sudden and dramatic changes. Your life may soon sport a dramatically different landscape."
	            }
	        },
	        "17": {
	        	"fname": "star",
	            "title": "The Star",
	            "descriptions": {
	                "0": "The star card is symbolic of renewal, promise, and hope. The nude figure on the card symbolizes unveiled truth. She pours forth the waters of life, both into the pool of present time and into the land, supplying rejuvenation for the future. The bird on the card is a messenger, bringing words of hope. The stars above shine brightly to guide you on your path. This card indicates that you're feeling hopeful and serene right now. You're sure of your path and confident of the future.",
	                "1": "The star card is symbolic of renewal, promise, and hope. The nude figure on the card symbolizes unveiled truth. She pours forth the waters of life, both into the pool of present time and into the land, supplying rejuvenation for the future. The bird on the card is a messenger, bringing words of hope. The stars above shine brightly to guide you on your path. You're craving peace and guidance, both of which are now close at hand.",
	                "2": "The star card is symbolic of renewal, promise, and hope. The nude figure on the card symbolizes unveiled truth. She pours forth the waters of life, both into the pool of present time and into the land, supplying rejuvenation for the future. The bird on the card is a messenger, bringing words of hope. The stars above shine brightly to guide you on your path. You may fear that you've lost your way, but the star card indicates a powerful force arrived to guide you.",
	                "3": "The star card is symbolic of renewal, promise, and hope. The nude figure on the card symbolizes unveiled truth. She pours forth the waters of life, both into the pool of present time and into the land, supplying rejuvenation for the future. The bird on the card is a messenger, bringing words of hope. The stars above shine brightly to guide you on your path. Your future holds great promise. Troubles of the past are washed away and the days ahead of you will heal and cleanse.",
	                "4": "The star card is symbolic of renewal, promise, and hope. The nude figure on the card symbolizes unveiled truth. She pours forth the waters of life, both into the pool of present time and into the land, supplying rejuvenation for the future. The bird on the card is a messenger, bringing words of hope. The stars above shine brightly to guide you on your path. You may have gotten lost among worldly things, but the star card is prompting you to turn to higher wisdom. This card is also prompting you to check your horoscope.",
	                "5": "The star card is symbolic of renewal, promise, and hope. The nude figure on the card symbolizes unveiled truth. She pours forth the waters of life, both into the pool of present time and into the land, supplying rejuvenation for the future. The bird on the card is a messenger, bringing words of hope. The stars above shine brightly to guide you. You're going through a cleansing and healing process. There are great things ahead with the stars to light your path."
	            }
	        },
	        "18": {
	        	"fname": "moon",
	            "title": "The Moon",
	            "descriptions": {
	                "0": "The moon card tells a complex story. A lobster or crab crawling out of the water represents primal man, unaware of his divine nature. The dog and wolf baying at the moon are earthly distractions that can get in the way of our journey toward greater celestial powers. The moon is a powerful guide, influencing the tides and channeling the flow of the universe. You may feel that your journey toward greater awareness is being hindered as you're pulled in multiple directions. You can feel the moon's pull, but aren't fully aware of what it's telling you.",
	                "1": "The moon card tells a complex story. A lobster or crab crawling out of the water represents primal man, unaware of his divine nature. The dog and wolf baying at the moon are earthly distractions that can get in the way of our journey toward greater celestial powers. The moon is a powerful guide, influencing the tides and channeling the flow of the universe. You want very much to tune in to your inner guide, channel the subtle powers of the moon, and connect with the divine. However, you're struggling with earthly distractions.",
	                "2": "The moon card tells a complex story. A lobster or crab crawling out of the water represents primal man, unaware of his divine nature. The dog and wolf baying at the moon are earthly distractions that can get in the way of our journey toward greater celestial powers. The moon is a powerful guide, influencing the tides and channeling the flow of the universe, however, you're pulled in too many directions right now to appreciate its subtle messages. ",
	                "3": "The moon card tells a complex story. A lobster or crab crawling out of the water represents primal man, unaware of his divine nature. The dog and wolf baying at the moon are earthly distractions that can get in the way of our journey toward greater celestial powers. The moon is a powerful guide, influencing the tides and channeling the flow of the universe. This card is calling you to pay attention to your intuition, dreams, and instincts. They have something important to tell you.",
	                "4": "The moon card tells a complex story. A lobster or crab crawling out of the water represents primal man, unaware of his divine nature. The dog and wolf baying at the moon are earthly distractions that can get in the way of our journey toward greater celestial powers. The moon is a powerful guide, influencing the tides and channeling the flow of the universe, however, you're pulled in too many directions right now to appreciate its subtle messages. You're ignoring your inner promptings and may suffer as a result.",
	                "5": "The moon card tells a complex story. A lobster or crab crawling out of the water represents primal man, unaware of his divine nature. The dog and wolf baying at the moon are earthly distractions that can get in the way of our journey toward greater celestial powers. The moon is a powerful guide, influencing the tides and channeling the flow of the universe. This card is calling you to pay attention to your intuition, dreams, and instincts. You will receive a powerful message when you fight past earthly trivialities."
	            }
	        },
	        "19": {
	        	"fname": "sun",
	            "title": "The Sun",
	            "descriptions": {
	                "0": "The sun is an extremely positive card. It features a carefree child riding a white horse. The child is representative of your long efforts finally bearing fruit, while the horse indicates that you're moving forward. The bright sun shines down bestowing blessings, accomplishments, honors, and recognition. The brick wall in the background is, for you, barriers that you have overcome to now bask in the light of your good fortune.",
	                "1": "The sun is an extremely positive card. It features a carefree child riding a white horse. The child is representative of your long efforts finally bearing fruit, while the horse indicates that you're moving forward. The bright sun shines down bestowing blessings, accomplishments, honors, and recognition. You've been working hard and envisioning this triumph for a long time. You yearn to bask in the fruits of your long labors.",
	                "2": "The sun is an extremely positive card. It features a carefree child riding a white horse. The child is representative of your long efforts finally bearing fruit, while the horse indicates that you're moving forward. The bright sun shines down bestowing blessings, accomplishments, honors, and recognition. The brick wall symbolizes barriers you must overcome to enjoy these fruits. You may fear scaling it, but great things await you on the other side.",
	                "3": "The sun is an extremely positive card. It features a carefree child riding a white horse. The child is representative of your long efforts finally bearing fruit, while the horse indicates that you're moving forward. The bright sun shines down bestowing blessings, accomplishments, honors, and recognition. The brick wall in the background shows barriers that you have overcome to now bask in the light of your good fortune. You have everything going for you right now. The sun card signifies a bright and triumphant time.",
	                "4": "The sun is an extremely positive card. It features a carefree child riding a white horse. The child is representative of your long efforts finally bearing fruit, while the horse indicates that you're moving forward. The bright sun shines down bestowing blessings, accomplishments, honors, and recognition. The brick wall signifies barriers you need to overcome, but once you do you will find great things waiting for you. ",
	                "5": "The sun is an extremely positive card. It features a carefree child riding a white horse. The child is representative of your long efforts finally bearing fruit, while the horse indicates that you're moving forward. The bright sun shines down bestowing blessings, accomplishments, honors, and recognition. The outcome of your endeavors right now will be extremely positive, leading you into this sunny, uplifting time."
	            }
	        },
	        "20": {
	        	"fname": "judgment",
	            "title": "Judgment",
	            "descriptions": {
	                "0": "The judgment card heralds a call to higher thinking and greater understanding. It does not indicate a time of harsh judgment, but rather speaks of a time of awakening within oneself. The judgment card often comes up after a period of confusion or hardship. It indicates that you now feel you're moving into a more confident and enlightened state. Reborn, the judgment card brings an end to indecision, depression, inhibition, and fear.",
	                "1": "The judgment card heralds a call to higher thinking and greater understanding. It does not indicate a time of harsh judgment, but rather speaks of a time of awakening within oneself. The judgment card often comes up after a period of confusion or hardship. It indicates that you deeply desire to move into a more confident and enlightened state. Reborn, the judgment card brings an end to indecision, depression, inhibition, and fear.",
	                "2": "The judgment card heralds a call to higher thinking and greater understanding. It does not indicate a time of harsh judgment, but rather speaks of a time of awakening within oneself. The judgment card often comes up after a period of confusion or hardship. Though you may find yourself lingering in indecision, depression, inhibition, and fear, the judgment card can help you conquer these fears.",
	                "3": "The judgment card heralds a call to higher thinking and greater understanding. It does not indicate a time of harsh judgment, but rather speaks of a time of awakening within oneself. The judgment card often comes up after a period of confusion or hardship. It indicates that you're now moving into a more confident and enlightened state. Reborn, the judgment card brings an end to indecision, depression, inhibition, and fear.",
	                "4": "The judgment card heralds a call to higher thinking and greater understanding. It does not indicate a time of harsh judgment, but rather speaks of a time of awakening within oneself. The judgment card often comes up after a period of confusion or hardship. You may find yourself lingering in indecision, depression, inhibition, and fear. This card is a call to make changes to yourself and environment to move forward.",
	                "5": "The judgment card heralds a call to higher thinking and greater understanding. It does not indicate a time of harsh judgment, but rather speaks of a time of awakening within oneself. The judgment card often comes up after a period of confusion or hardship. It indicates that you're now moving into a more confident and enlightened state. Reborn, the judgment card brings an end to indecision, depression, inhibition, and fear. You have a fresh start before you."
	            }
	        },
	        "21": {
	        	"fname": "world",
	            "title": "The World",
	            "descriptions": {
	                "0": "The world card is the last numbered card in the Major Arcana. Here, you end the journey you began as the headstrong fool. This card is anchored in the four corners by the four fixed signs of the zodiac: Taurus, Leo, Scorpio, and Aquarius. It signifies all things coming into alignment and bearing fruit. The world card represents the completion of a major part of your journey. You've finished a great work and are now ready to proceed at a completely different level.",
	                "1": "The world card is the last numbered card in the Major Arcana. Here, you end the journey you began as the headstrong fool. This card is anchored in the four corners by the four fixed signs of the zodiac: Taurus, Leo, Scorpio, and Aquarius. It signifies all things coming into alignment and bearing fruit. The world card represents the completion of a major part of your journey. You're anxious to reach this nearing conclusion and proceed at a new, heightened level.",
	                "2": "The world card is the last numbered card in the Major Arcana. Here, you end the journey you began as the headstrong fool. This card is anchored in the four corners by the four fixed signs of the zodiac: Taurus, Leo, Scorpio, and Aquarius. It signifies all things coming into alignment and bearing fruit. The world card represents the completion of a major part of your journey. You may find that you're holding back from finishing those last few steps, intimidated by the greatness that awaits you at the next level.",
	                "3": "The world card is the last numbered card in the Major Arcana. Here, you end the journey you began as the headstrong fool. This card is anchored in the four corners by the four fixed signs of the zodiac: Taurus, Leo, Scorpio, and Aquarius. It signifies all things coming into alignment and bearing fruit. The world card represents the completion of a major part of your journey. You've finished a great work and are now ready to proceed at a completely different level.",
	                "4": "The world card is the last numbered card in the Major Arcana. Here, you end the journey you began as the headstrong fool. This card is anchored in the four corners by the four fixed signs of the zodiac: Taurus, Leo, Scorpio, and Aquarius. It signifies all things coming into alignment and bearing fruit. The world card represents the completion of a major part of your journey. You may find that you're holding back from finishing those last few steps, but there's no reason to fear what's ahead.",
	                "5": "The world card is the last numbered card in the Major Arcana. Here, you end the journey you began as the headstrong fool. This card is anchored in the four corners by the four fixed signs of the zodiac: Taurus, Leo, Scorpio, and Aquarius. It signifies all things coming into alignment and bearing fruit. The world card represents the completion of a major part of your journey. You've finished a great work and are now ready to proceed, reborn, at a different level."
	            }
	        }
	    },

		setStage : function(){
			if ($(window).width() <= 800) this.mobile = true
				else this.mobile = false;

			var stage = { height: 0, width: 0 };
			stage.height = (this.mobile)? $(window).height() : $(window).height()-$('#footer').height();
			stage.width = $(window).width()*.7;

			$('#card-select .card-cont').height(stage.height/3);

			var resultMargin = (this.mobile)? 0 :($(window).width()-$('#end-screen').width())/2;
			$('#results-cont .result-card').css({
				'width': $('#end-screen').width(),
				'margin-right': resultMargin*2
			});
			$('#results-cont .inner-cont').css({
				'left': 0,
				'width': ($('#results-cont .result-card').outerWidth()+(resultMargin*2))*6
			});
			if(this.mobile){
				$('.cont').css({
					height: '100%',
					top: 0
				});
				$('#results-cont').height($('#results-cont .inner-cont').outerHeight());
			}else{
				for (var i = 0; i < $('#results-cont .result-card').length; i++) {
					var titleWidth = $('#results-cont .result-card').eq(i).find('.right .reading-title').outerWidth()+($('#results-cont .result-card').eq(i).find('.outline .right').width()*2);
					var outlineWidth = $('#results-cont .result-card').eq(i).find('.outline').width();
					$('#results-cont .result-card').eq(i).find('.outline .left').width(outlineWidth-titleWidth);
				};
				for (var i = 0; i < $('#main-wrapper .cont').length; i++) {
					var padding = (stage.height/2)-($('#main-wrapper .cont').eq(i).outerHeight()/2);
					$('#main-wrapper .cont').eq(i).css({
						height: '',
						'top': (padding<0)? 0 : padding
					});
				};

				var endScreenPadding = parseInt($('#end-screen').css('padding'))*2;
				var endScreenHeight = $('#end-screen .title').height()+parseInt($('#end-screen .title').css('margin-bottom'))+$('#end-screen .inner-cont').height()+endScreenPadding;
				$('#end-screen').css({
					height: endScreenHeight,
					top: (stage.height/2)-(endScreenHeight/2)
				});
			}
		},

		transitionScreen : function(screenNum){
			var that = this;
			if(screenNum == 3) that.setEndScreen();

			$('#main-wrapper .cont').animate({'opacity': '0'});
			$('#main-wrapper .cont').eq(screenNum-1).animate({'opacity': '1'}, function(){
				if(screenNum == 2) that.layCards(true);
			});

			$('#main-wrapper .cont').css('pointer-events', 'none');
			$('#main-wrapper .cont').eq(screenNum-1).css('pointer-events', 'auto');

			this.currentScreen = screenNum;
		},

		setEndScreen: function(){
			$('#results-cont .inner-cont').css('left', 0);
			for(theCard in this.selectedCardArray){
				var order = theCard;
				var cardNum = this.selectedCardArray[theCard];
				$('#results-cont .result-card').eq(order).find('.card-img').attr('src', 'img/cards/'+this.characters[cardNum]['fname']+'.png');
				$('#results-cont .result-card').eq(order).find('.card-title').html(this.characters[cardNum]['title']);
				$('#results-cont .result-card').eq(order).find('.descrip').html(this.characters[cardNum]['descriptions'][order]);
			};
			this.setStage();
		},

		nextCard: function(){
			if(this.mobile)$('#main-wrapper #end-screen').scrollTop(0);
			var curPos = $('#results-cont .inner-cont').css('left');
			var padding = (this.mobile)? 0 : ($(window).width()-$('#end-screen').width())/2;
			$('#results-cont .inner-cont').animate({'left': parseInt(curPos)-($('#results-cont .result-card').outerWidth()+(padding*2))})
		},

		prevCard: function(){
			if(this.mobile)$('#main-wrapper #end-screen').scrollTop(0);
			var curPos = $('#results-cont .inner-cont').css('left');
			var padding = (this.mobile)? 0 : ($(window).width()-$('#end-screen').width())/2;
			$('#results-cont .inner-cont').animate({'left': parseInt(curPos)+($('#results-cont .result-card').outerWidth()+(padding*2))})
		},

		newReading: function(){
			this.resetCards(false);
			this.transitionScreen(2);
		},

		resetCards : function(anim){
			this.selectedCardArray = [];
			this.animationCardArray = [];

			for(var i = 0; i<22; i++){
				this.animationCardArray.push(i);
			}

			if(anim){
				$('#card-select .card-cont .card').animate({
					'left': 0,
					'opacity': 0,
					'bottom': '-100%'
				});
			}else{
				$('#card-select .card-cont .card').css({
					'left': 0,
					'opacity': 0,
					'bottom': '-100%'
				});
			};
			$('#card-select .card-cont .card').css({
   				"-webkit-box-shadow": '',
    			"-moz-box-shadow": '',
    			"box-shadow": '',
				'-o-transform': 'rotate(0deg)',
				'-webkit-transform' : 'rotate(0deg)',
				'-moz-transform' : 'rotate(0deg)',
				'-ms-transform' : 'rotate(0deg)',
				'transform' : 'rotate(0deg)'
			});
			$('#card-select .count span').html('0');
			$('#card-select .count span').css('opacity', '0.7');
			$('#card-select .btn').css({
				'opacity': '0.5',
				'pointer-events': 'none'
			});
		},

		layCards : function(anim){
			this.resetCards((anim)? true : false);

			var contWidth = ($('#card-select .inner-cont').width()-parseInt($('#card-select .inner-cont').css('margin-right')))-$('#card-select .card-cont .card').width();
			var topPercent = $('#card-select .card-cont').height()*.3;
			var interval = Math.PI * 1/21;
			var position = 0;
			var degrees = 5;

			for(var i = 0; i<22; i++){
				var randomCardNum = this.getRandomCardNum();
				var card = $('#card-select .card-cont .card').eq(randomCardNum);
				var origin = '50% 20%'; 
				var bottom = (this.mobile)? (($('#card-select .inner-cont').height()/2)-($('#card-select .card-cont .card').eq(i).height()/2)) : topPercent * Math.sin(position);
				if(!this.mobile)card.css({
					'-o-transform': 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'-webkit-transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'-moz-transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'-ms-transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)'
             	});
				card.css('z-index', i);
				if(anim){
					card.animate({
						'left': (contWidth/21)*i,
						'opacity': 1,
						'bottom': bottom
					}, 75*i)
				}else{
					card.css({
						'left': (contWidth/21)*i,
						'opacity': 1,
						'bottom': bottom
					});
				}
				position += interval;
				degrees += interval;
			};
		},

		getRandomCardNum : function(){
			var arrayLength = this.animationCardArray.length-1;
			var randomNumber = Math.round(Math.random()*arrayLength);
			var cardNum = this.animationCardArray[randomNumber];
			this.animationCardArray.splice(randomNumber, 1);
			return cardNum;
		},

		cardClick : function(card){
			var cardNum = $(card).attr('data-order');

			for(theCard in this.selectedCardArray){
				if(this.selectedCardArray[theCard] === cardNum){
					this.selectedCardArray.splice(theCard,1);
					$(card).animate({ 'bottom': parseInt($(card).css('bottom'))-20 });
					$('#card-select .count span').html(this.selectedCardArray.length);

					$('#card-select .count span').css('opacity', '0.7');
					$('#card-select .btn').css({
						'opacity': '0.5',
						'pointer-events': 'none'
					});
					return;
				};
			};
			if(this.selectedCardArray.length < 6) this.selectedCardArray.push(cardNum)
				else return;

			if(this.selectedCardArray.length == 6){
				$('#card-select .count span').css('opacity', 1);
				$('#card-select .btn').css({
					'opacity': 1,
					'pointer-events': 'auto'
				});
			}
			$(card).animate({ 'bottom': parseInt($(card).css('bottom'))+20 });
			$(card).css({
   				"-webkit-box-shadow": '0px 0px 30px 5px rgba(255,255,255,1)',
    			"-moz-box-shadow": '0px 0px 30px 5px rgba(255,255,255,1)',
    			"box-shadow": '0px 0px 30px 5px rgba(255,255,255,1)',
			});
			$('#card-select .count span').html(this.selectedCardArray.length);
			this.setEndScreen();
		},

		resize : function(){
			this.setStage();
			this.layCards(false);
		},

		init : function(){
            this.setStage();
            app.transitionScreen(2);
            //$('#proceed').on('click', function(e){ e.preventDefault(); app.transitionScreen(2); });
			$('#card-select .btn').on('click', function(e){ e.preventDefault(); app.transitionScreen(3); });
			$('#card-select .shuffle').on('click', function(e){ e.preventDefault(); app.layCards(true); });
			$('#card-select .card').on('click', function(e){ e.preventDefault(); app.cardClick(e.target); });
			$('#results-cont .result-card .btn-next').on('click', function(e){ e.preventDefault(); app.nextCard(); });
			$('#results-cont .result-card .btn-prev').on('click', function(e){ e.preventDefault(); app.prevCard(); });
			$('#results-cont .result-card .btn-reset').on('click', function(e){ e.preventDefault(); app.newReading(); });

			$(window).on('resize', function(){ app.resize(); });
		}
	};

    //swap link based on user role
    var memberRole = parent.memberIs;
    if (memberRole == "ANON" || memberRole == "ANONREP" || memberRole == "COOKFRE" || memberRole == "COOKFREM" || memberRole == "LOGFRE" || memberRole == "LOGFREM") {
        $(".js-jump-link").attr("href", "/secure/create-account");
    }    

	$(window).on('load', function(){ app.init(); });
});
