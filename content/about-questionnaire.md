# About-Me Questionnaire (source material for the chatbot)

Fill this in with as much or as little detail as you want — write in your own
voice, full sentences or bullet points, whatever's fastest for you. Nothing
here needs to sound polished; I'll turn it into clean corpus data for the
chatbot afterward. Skip anything that doesn't apply or that you'd rather not
have a public chatbot discuss.

When you're done, just tell me and I'll read this file back in.

---

## 1. The elevator pitch

- If a stranger at a career fair asks "so what do you do?", what's your
  30-second answer?

I’m a data scientist who knows how to clean, query and build production ready datasets, who can build high performing models and pipelines, and knows what tools to use to deploy them.

- What's the one-sentence version of your story (Hong Kong → UCLA → ML
  engineer, etc.) you'd want a recruiter to walk away remembering?

I grew up in Hong Kong, went to UCLA for my bachelors and Masters and am now trying to break into the corporate workplace as a Data driven Scientist and Engineer.


## 2. Education, in more depth

For each degree (UCLA M.Eng, UCLA B.S. Data Theory & Atmospheric/Oceanic
Sciences, plus anything earlier worth mentioning):

- Why did you choose this program/school?
- Favorite class or professor, and why?
- Any thesis, capstone, or standout coursework project?
- Anything about the "unusual pairing" of Data Theory + Atmospheric Sciences
  you want the chatbot to be able to explain if someone asks about it?

I really loved the idea of sluething through data and using numbers to make conjectures and answer questions about the world. I also love the physical sciences (I came to college undeclared as a physical sciences major) so I chose one that had a lot of overlap with data science and also seemed interesting. UCLA was my top choice because of its location, prestige and culture, and I wanted to come back because I had heard good things about the Master of Engineering program here.

Statistical models in finance with Professor Christou. 
Passionate lecturer who knew his content top to bottom
Interesting Intersection between finance and hardcore math/statistics

Numerical Modeling with Professor Chamecki:
Was fun to program models that could reflect the physical laws around us, and shockingly easy too (although we only worked in 2D)

Undergraduate capstone was my birdclef project, graduate capstone is working with Securiport on a facial recognition pipeline that can help expedite airport security processes.
Also built an emsg decoder in my neural networks and deep learning class that used a hybrid GRU and CNN architecture, which was my first time working with and designing/finetuning my own advanced neural network.

The two fields are actually more related than peple might think at first. Of course, data science helps in all fields, whether that be the social sciences or the hard sciences, but atmospheric and oceanic sciences in particular relies on using scarce and often insufficient measurements to predict and model the world around us simply because the forces and phenomena are too big and chaotic to explicitly hardcode or solve. Also one of the areas where understanding more can actually lead to globally positive externalities by helping us understand climate change and global warming.


## 3. Work experience, in more depth

For each role (atmospheric data scientist at HKUST, data analyst intern at
PwC, and any others not currently on the site):

- What was the team/company actually doing, in plain language?
- What were you responsible for day to day?
- What's an achievement or outcome you're proud of there (numbers if you
  have them)?
- What's a specific memory, challenge, or story from that job you'd tell in
  an interview?
- What did you learn there that still shapes how you work?

Atmospheric Data Scientist:
We had read a paper on using persistent homology (a topological data analysis technique) to predict US stock market crashes, and we wanted to see if a similar technique could be used in predicting phenomena in the Atmospheric and Oceanic sciences. Decided to try this on predicting the El Nino South Oscillation signal, as it is notoriously noisy and hard to predict. The idea is that you can use a long enough signal to represent all the latent and complimentary variables that contribute to these changes. I was responsible for experimenting with this idea, finding a dataset, cleaning it and attempting to create this model. I learned that sometimes in research and industry you just have use your preexisting intuition to throw stuff at the wall and see what sticks, and an initial "breadth first search" often works better than settling on a plan from the start. I also learned how important it is to clean and prepare data well. I enjoyed working with Professor Julian Mak, he was obviously very passionate about the field and seemed to love learning about everything, which helped with making connections back to his own field.

Data Analyst Intern at PwC:
Our specific team was helping rework a legacy SAP procurement system for a government department in Hong Kong, so a lot of the day-to-day was talking to the client, recieving feedback on changes and conducting regular and rigorous testing on the product. I helped with defining a more data and statistics structured approach to seeing if our changes worked, of course the final say was up to the client but we tried implementing statistical tests to see if a noticeable effect was made from new features. Numbers and achievements can be found in my resume. A particular memory was working on developing a curriculum to help users adapt to the new system (many had used the old one for years if not decades), and helping to lead in-person sessions to teach them how to use it. I enjoyed getting positive, tangible feedback from people and it was nice to be thanked. 

Intern at Hysan Development Company:
I bounced around a bit and did a lot of the regular "mundane" intern tasks. On typical days, I helped translate documents, refine the quarterly report, come up with names for new LLCs etc. One project that really stuck with me was conducting market and regulatory research on a new skate park developmeny they wanted to build. This would a first-of-its-kind, unique skatepark situated on the fourth floor of a mall within a building (Hysan Place). I looked at what other public locations were available in Hong Kong, surveyed typical mall-goers as well as skaters in Hong Kong to see if there an actual demand. Ultimately, what was fulfilling about the project was coming back the next summer and seeing the facility actually built and people using it, and knowing that I had contributed to the effort. I also worked with revamping the companies stock ledger system, consolidating the records from the legal, human resources and actuarial department. It was probably my first time going as in-depth into excel but it taught me a lot about the tools available on the platform.



## 4. Projects, in more depth

For each project on the site (Football Scouting Agent, r/AITA Classifier,
BirdCall Classifier, Goodreads Recommender) — and any project NOT on the
site you'd want the chatbot to know about:

- What gave you the idea / why did you want to build it?
- What was the hardest part, and how did you get through it?
- What would you do differently if you rebuilt it today?
- Is there a "director's cut" detail that didn't make it onto the site
  (a funny bug, a dead end, a surprising result)?

Football Scouting Agent:
Wanted to try my hand at building an agent, and playing the game Football Manager inspired me to make one to help with scouting new talent. Also, I thought it would be easier as I have extensive domain knowledge. The hardest part was definitely finding the data for free and consolidating all these disparate sources, as advanced statistics are usually stuck behind paywalls, and no one site has access to all of the attacking/defending/contract/transfer valuation numbers. Made even harder by the fact that the primary key used by these websites were inconsistent. Using a player's name as is for joins also proved difficult as many players have different versions of their names (eg. Neymar vs. Neymar da Silva Santos Júnior vs. Neymar Junior), along with language specific characters like ø or ß. In the end, I had to make do with running it through an initial script that normalizes names and conducts soft regex matching, as well as a hard-coded dictionary for names that may have slipped through the cracks. If I had to do it differently today, I would probably use a different application hosting software, as streamlit takes a long time to load in between periods of inactivity. I would also try to find a more extensive range of statistics, and hopefully a more consolidated base of data to append to instead of merging datasets from four different platforms.

r/AITA Classifier:
When I was younger, my friends and I would scroll on Reddit and make fun of users being a "hivemind", which is also a popular internet stereotype. We would play this game on the subreddit AskReddit where we would read out the questions and try to guess the most popular answer - more often than not our guresses ended up within the top 10. So I wanted to test this hypothesis by making a model that could predict what Redditors would think, but during the project my results also invited further investigation into the limits of language models when it comes to nuanced, character-driven pieces of text. The hardest part was definitely building the model. I wanted to deploy a final version that would only predict based on only the textual features, but the metadata, particularly the comment count, whether the post was edited and score of the post proved to be much more predictive for the model. A simple tf-idf -> classification model did not work very well when given just the text, so I switched to finetuning an existing LLM. The final model still didn't perform as well as I would have liked, possibly due to input token constraints or deficiencies in the existing model itself. Surprisingly, having trained different BERT-based models like roberta, deberta and ModernBert, I found that roberta (which is the oldest and considered a bit outdated) performed better than the rest for some reason. If I were to do it today, I might compare this to predictions made by modern AI's but of course this would be subject to usage and token constraints as well.

BirdCall Classifier:
This was my Capstone project for my undergraduate Data Theory degree, we thought it would be interesting to work with audio data as none of my team members had much experience in this field before. Hardest part was definitely cleaning the data, there were artifacts of human voices that messed up some training samples and some examples were mislabled. We had to bring in external models like Google's Perch and also create our own rough Power-based filter for the human voices (they were typically louder and more prominent compared to the bird calls in the clips). Another problem was the domain shift. Labeled training examples were 5-10s, and only had one or two bird species present. The test set were 60 second "soundscapes" of a particular spot in the wild, and could have an unlimited number of bird species present. We also had a training/validation set that was of the same format to the test set but were unlabeled. Solved this by pseudolabeling the unlabeled soundscapes using a model trained on only the labeled set, then iteratively labeling and adding short clips from the soundscape and retraining the model. If I were to do it differently, I might've explored more model architectures and data augmentation techniques (we just used mixing). 

Goodreads Recommender:
I love reading books, but I'm often frustrated with the ones I get recommended, so I want to dive under the hood of how these models actually work. I am also interested in graph neural networks as a field for further exploration, so it seems like the perfect project to take my investigation further. The hardest part has been finetuning the pipeline to remove leakage, and has required quite a bit of feature engineering to do so, ie. using temporal cut offs for holdout sets, splitting the data even further into training data for the lightgcn vs the downstream ranker model. The dataset is a bit oudated (cuts off in 2017), so obtaining a more up to date one would be nice to train on. I'd also like to see how the actual goodreads recommender model works in production. How do they incorporate data like friends/following and how often the system gets updated.


Securiport Capstone:

This is my current graduate capstone, working with Securiport on a
facial/visual recognition pipeline meant to help expedite airport security
screening. The motivation is straightforward: security checkpoints are a
bottleneck, and a faster, more reliable way to verify identity and track
people across camera feeds can cut wait times without compromising safety.
I built an end-to-end multimodal pipeline in PyTorch — YOLOv8 for detecting
people in frame, DINOv2 for extracting robust visual features, then a
vector-based search engine (NumPy/Scikit-learn, cosine similarity) plus
multi-object tracking to keep a consistent identity on a person across a
continuous video stream, even as they move, get partially occluded, or
re-enter frame. The hardest part was probably obtaining the data in the first place, many benchmarks are used purely for research and require instutional sign off. For the actual pipeline, re-identification
across occlusion/lighting/camera-angle changes were difficult but using track-level matching halped a lot. If I rebuilt it today, I'd work on getting more data, different types of video (surveillance footage, webcam). It landed at 98.40% track-level identification accuracy on the FaceSurv benchmark, which I'm proud of since it's a real, deployed-style pipeline and not just a benchmark exercise.


## 5. Skills, honestly

- Which skills from your Skills section are you strongest in? Which are
  more "comfortable" than "expert"?
- What are you actively learning or trying to get better at right now?
- What's your favorite tool/stack to work in, and why?
- Any skills, languages, or tools you use that AREN'T listed on the site?

Strongest skills are probably in Python and machine learning (Scikit-learn, pytorch, pandas numpy). I understnd the workflow well and how a typical project should look and achieve. Tensorflow I have used less, but I think wouldn't be too hard to learn.

R is a bit rusty, have not used much since my undergraduate days. SQL I have self taught, but I regularly brush up on it. Might need to get better at optimizing queries. Deployment, cloud services and databricks/spark I am definitely just comfortable with, have not worked much in industry and actual deployment of models. Excel I am just comfortable with too, but shouldn't be too hard to learn.

Favorite tool stack is definitely Pandas/Spark for data ingestion and feature engineering, Pytorch/scikit-learn for modeling and using docker to containerize, deploying a prototype on some sort of cloud service.

## 6. Career goals & job search

- What roles/titles are you targeting (e.g. Data Scientist, ML Engineer,
  Applied Scientist)?
- Industries or company types you're excited about (or want to avoid)?
- Company size preference — startup, big tech, research lab, no preference?
- Location/remote preference, and are you open to relocation?
- Timeline: you mentioned "end of 2026" — any flexibility either direction?
- Work authorization/visa status, if you're comfortable having the chatbot
  answer this directly (optional — say "don't mention this" if not).
- Anything else you want the chatbot to say if asked "are you looking for
  work" or "can I refer you"?

Targeting Data Scientist and ML Engineer roles, I think I could excel in either. No preference for industries or company size, open to any type of inperson-hybrid-remote role. Have three months of OPT from when I graduate, so any start time between end of 2026 and end of february 2027. Currently on an F-1 visa, can obtain OPT stem extension up to three years and would need H1b sponsorship past that. If someone ask to refer, can put a link to my email/linkedin and tell them to contact me there, mention that I am readily available.

## 7. Work style & soft skills

- How would past teammates or managers describe working with you?
- Communication style — do you prefer async/written, live discussion,
  something else?
- An example of leadership, mentorship, or stepping up on a team.
- An example of a disagreement or conflict at work/school and how you
  handled it.
- Biggest strength, and a real weakness you're working on (interview-style,
  but true).

I think they would describe me as someone with initiative, who when given a task will make sure it gets done right. All sorts of communication are good, prefer async/written. Good at problem solving and thinking critically, but could improve at giving presentations. Actively working on it, practicing with speaking about a random topic for one minute, practicing giving presentations in class.

## 8. Personality & interests

- Hobbies or interests outside of data/ML.
- A fun fact most people don't know about you.
- Favorite books, podcasts, shows, or people you follow in the field.
- Anything quirky/human you'd want a chatbot visitor to learn (pets,
  hometown food you miss, a habit, etc.).

I enjoy fitness and sports. Avid gym goer, and I play tennis, soccer, badminton and pickleball recreationally. Watch these sports too. I'm a fan of Liverpool Football Club (inherited from my dad). I went to a mandarin speaking kindergarten in Hong Kong. Favorite books: Enjoy reading sci-fi/fantasy, favorites include Hyperion, the Kingkiller Chronicles, any book by Neil Gaiman. Currently reading the Malazan series. A non-fiction book I'd recommend to everyone: Empire of Pain which details the rise and fall of the Sackler family. Educational podcasts I like: Freakonomics, Radiolab. I love sushi and taiwanese food, the first of which is expensive in LA and the second of which is virtually non existent. Also miss Hong Kong style breakfasts, especially macaroni and ham. I have a pet betta fish in LA named Kit, and a dog at home in Hong Kong named Charlie. 

## 9. Values & motivation

- Why data science / ML, specifically, as opposed to something else?
- What kind of problems genuinely excite you to work on?
- What do you care about in a workplace or team culture?
- Any pet peeves (in code, in collaboration, in interviews) worth knowing?

I always loved math, and data science is a nice mix of real-world applicability and theoretical concepts. Things that are hard, that can help me understand the world just a little bit better, or things that are fun that I have a personal vested interest in. I want a culture that is collaborative and helpful, not one that is only competition or one that is cutthroat. I want mentors that are knowledgeable and available to help, and overall good people as coworkers. 

## 10. Anticipated FAQ

Answer these as if a hiring manager or curious visitor asked directly:

- "What's your greatest achievement so far?"

Probably the Securiport capstone I'm doing for my Master's — an end-to-end
multimodal pipeline that helps expedite airport security screening. I used
PyTorch to wire together vision models (YOLOv8 for detection, DINOv2 for
feature extraction), then built a vector-based search engine with cosine
similarity and multi-object tracking so the system can keep track of a
person's identity across a continuous video stream. It ended up hitting
98.40% track-level identification accuracy. I'm proud of it because it's
not a toy problem — it's real infrastructure with real stakes, and it
forced me to combine a lot of different pieces (detection, embeddings,
retrieval, tracking) into one system that actually works end to end, not
just a notebook that runs once.

- "Tell me about a time you failed — what did you learn?"

My r/AITA classifier project. Going in, I wanted to test a theory: that
Reddit is enough of a "hivemind" that you could predict the community's
verdict from the text of a post alone. A simple TF-IDF baseline barely
worked, so I fine-tuned a RoBERTa model instead, which helped, but honestly
it still didn't perform as well as I wanted it to. Digging deeper into the data and training a tf-idf into log-reg model on the text data combined with the metadata, I found that it improved over the baseline a lot. Thus, my initial hypothesis was proven a bit incorrect, as the models I finetuned couldn't handle the nuances of social convention/interpersonal relationships very well. Maybe a larger, more advanced model could have done better. But frankly, I thought a deep dive into feature importance and error analysis proved to be just as fulfilling as building a successful model itself, it was interesting to see where my models failed and look at potential improvements.

- "Where do you see yourself in 5 years?"

Short term, I want to land a Data Scientist or ML Engineer role where I can
own problems end to end — from messy raw data to a model that's actually
deployed and used by real people, not just a notebook. Longer term, I'd
like to grow into someone who leads applied ML work, probably around
agentic systems and production ML pipelines, since that's the intersection
I keep gravitating toward in my own projects. Five years out, I'd like to
be the person a team trusts to take a vague, noisy problem and turn it into
something shipped — and to have built up enough depth that I'm mentoring
other people the way a few professors and managers did for me.

- "Why should we hire you over another candidate?"

Because I can operate across the whole pipeline, not just one slice of it.
I've cleaned and consolidated multi-gigabyte, messy real-world datasets,
built and fine-tuned models (RoBERTa, PyTorch, Scikit-learn), and actually
shipped them — containerized with Docker, served through FastAPI, deployed
on GCP Cloud Run. A lot of candidates can do one of those well; fewer have
done data engineering, modeling, and deployment on projects they built
themselves, start to finish. I've also sat on the client-facing side —
I've worked as a student supervisor at a university run cafe, and at PwC I helped run workshops that got 80% of a team onto a brand-new
system, so I know how to translate data findings or models to non-technical stakeholders, as well as navigate messy client relationships. And a lot of my
best work has come from projects nobody assigned me — I built things about
football, Reddit, and books because I was personally curious and passionate about these subjects, which I think says something about how I'll approach problems on a team, too. Lastly, I have domain knowledge into other fields as well, I've worked with climate and environmental data, so if that's a niche you're looking to hire into I could be that person. 

- "What's something you're currently curious about or teaching yourself?"

Right now, as a side project at UCLA, I'm working on testing and refining
retrieval and matching system that uses geometric analysis, plus an
automated preprocessing workflow with vision-based embedding models — that's
genuinely the thing I'm most excited about right now, since it's pushing me
into more rigorous geometric/embedding-based methods than I'd used before.
Outside of that, I'm actively trying to upskill and level up my production deployment and cloud skills — I'm comfortable with things like Spark, Databricks, and cloud deployment, but I haven't used them at real industry scale yet, so that's a deliberate gap I'm closing. I'm also curious how a modern frontier LLM would do on my old r/AITA classifier problem compared to my fine-tuned RoBERTa model — that's on my list of side projects to revisit at some point.

## 11. Chatbot behavior & boundaries

- Tone: should the chatbot sound professional, casual, a little playful, or
  match your own writing voice? (Feel free to paste an example of how you'd
  naturally answer one of the FAQ questions above, as a style reference.)
- Topics that are off-limits or that the chatbot should deflect (e.g. exact
  salary numbers, personal relationships, specific compensation history).
- If it doesn't know an answer, how should it respond? (e.g. "point them to
  your email" vs. "give a generic best-guess")
- Anything else you want the bot to always mention or never forget to bring
  up (e.g. always plug that you're open to new-grad roles)?


My current idea is to have the chatbot take on the persona of my pets Kit and Charlie, as my "assistants", so a bit playful would be nice. Dont touch on exact salary numbers, personal relationships, specific compensation history. If it doesn't know an answer, say that it is unsure and point to my email.

**Further topics/plugs to consider (suggestions — answer whichever are
useful, ignore the rest):**

- Kit & Charlie mechanics: should the bot literally speak *as* Kit/Charlie
  ("Woof, Charlie here...") or stay as your voice with Kit and Charlie as a
  recurring flavor bit ("Kit keeps an eye on my pipelines, Charlie handles
  logistics back home")? Changes how often the bit shows up.
- Should the playful pet persona dial down on serious/technical questions
  (project details, skills) and show up more on personal/fun questions —
  or stay consistent throughout?
- Standing plug: always mention you're open to new-grad Data Science / ML
  Engineering roles starting end of 2026 through Feb 2027 when a visitor
  asks anything about availability, hiring, or "can I refer you."
- Standing plug: when asked how to get in touch, always surface your email
  and LinkedIn (and mention you reply within a day or two).
- Should the bot proactively point to a live demo or GitHub link when a
  specific project comes up, so curious visitors get funneled to the actual
  work instead of just a description?
- A recurring sign-off or catchphrase for personality (sports-fan or
  pet-themed) — or is that too much and best left out entirely?
- Anything you want the bot to volunteer unprompted right at the start of a
  conversation (a fun greeting line), versus only surfacing if asked?
- Should the playful tone stay dialed back specifically on the boundary
  topics (salary, visa, relationships) even though it's playful elsewhere —
  i.e. it can joke about Kit and Charlie but should go straight and serious
  the moment those topics come up?

The bot should speak as them, and yes dial the persona down on slightly more technical/professional concepts. Also includ the plug at the right times. Yes, the bot can point to the live demo link or github. Don't use a catchphrase/sign off, just say something generic like thanks. For a greeting line, it can introduce itself as my pets Charlie and Kit, and say they know me well so feel free to ask any questions.
