## Football Scouting Agent — behind the scenes

Marvin wanted to try building an agent, and playing Football Manager
inspired him to build one that helps scout new talent — a domain where he
already had deep knowledge. The hardest part was finding usable data for
free and consolidating disparate sources, since advanced stats are usually
paywalled and no single site has attacking, defending, contract, and
transfer-valuation numbers all in one place. Made harder because primary
keys were inconsistent across sites, and player names varied wildly (e.g.
Neymar vs. Neymar da Silva Santos Júnior vs. Neymar Junior), plus
language-specific characters like ø or ß. He ended up writing a name
normalization and soft regex-matching script, backed by a hard-coded
dictionary for edge cases that slipped through. If he rebuilt it today,
he'd use different hosting than Streamlit (slow to wake up after
inactivity) and try to find a more consolidated, extensive stats source
instead of merging four different platforms.

## r/AITA Classifier — behind the scenes

The idea started as a running joke: Marvin and his friends used to mock
Reddit's "hivemind" reputation, playing a game on r/AskReddit where they'd
guess the top-voted answer before reading comments — and usually landed in
the top 10 guesses. He wanted to test that hivemind hypothesis for real by
predicting community verdicts on r/AmITheAsshole. The hardest part was the
model itself: he wanted a version that predicted from text alone, but
metadata (comment count, whether the post was edited, score) turned out to
be far more predictive than the text. A simple TF-IDF classifier
underperformed, so he fine-tuned RoBERTa instead — an improvement, though
combining a TF-IDF/logistic-regression model with the metadata features
actually beat that by a lot, confirming that his original text-only
hypothesis was off: the models couldn't fully capture the nuance of social
convention and interpersonal dynamics in these posts. Interestingly,
RoBERTa (the oldest of the BERT-family models he tried, alongside DeBERTa
and ModernBERT) outperformed the newer ones. He found the feature-importance
and error analysis just as rewarding as the modeling itself — digging into
where the model failed was as interesting as getting it to succeed. If he
did it again, he'd like to compare against a modern frontier LLM, budget
and token limits permitting.

## BirdCall Classifier — behind the scenes

His undergraduate Data Theory capstone. The team wanted to work with audio
data specifically because none of them had experience there. The hardest
part was data cleaning — human-voice artifacts contaminated some training
clips, and some labels were wrong, which they fixed by bringing in external
models like Google's Perch plus a custom power-based filter (human voices
were typically louder/more prominent than bird calls). The bigger challenge
was domain shift: labeled training clips were 5-10 seconds with one or two
species, but the test set was 60-second wild "soundscapes" with an
unbounded number of species, and the corresponding unlabeled
training/validation data was in that same soundscape format. They solved it
by pseudo-labeling the unlabeled soundscapes with a model trained on the
labeled clips, then iteratively relabeling and retraining. In hindsight,
he'd explore more model architectures and data augmentation beyond the
mixing approach they used.

## Goodreads Recommender — behind the scenes

Marvin loves reading but is often frustrated by the recommendations he
gets, so he wanted to look under the hood of how these systems actually
work — and it doubles as a chance to explore graph neural networks, a field
he wants to dig into further. The hardest part has been removing data
leakage in the pipeline, requiring careful feature engineering: temporal
cutoffs for holdout sets, and splitting training data between the LightGCN
stage and the downstream ranker model. The dataset is a bit dated (cuts off
in 2017), so a more current dataset would help. He's also curious how
production recommender systems (like Goodreads' actual one) incorporate
social signals like friends/following, and how often they're updated.

## Securiport Capstone — behind the scenes

Marvin's current graduate capstone, built with Securiport: a facial/visual
recognition pipeline meant to help expedite airport security screening.
Security checkpoints are a bottleneck, and a faster, more reliable way to
verify identity and track people across camera feeds can cut wait times
without compromising safety. He built an end-to-end multimodal pipeline in
PyTorch — YOLOv8 for detecting people in frame, DINOv2 for extracting
robust visual features, then a vector-based search engine (NumPy /
Scikit-learn, cosine similarity) plus multi-object tracking to keep a
consistent identity on a person across a continuous video stream, even
through occlusion or re-entering frame. The hardest part was actually
obtaining usable data — many benchmarks are research-only and require
institutional sign-off; on the modeling side, re-identification across
occlusion, lighting, and camera-angle changes was the toughest piece, and
track-level matching helped a lot there. It reached 98.40% track-level
identification accuracy on the FaceSurv benchmark. If he rebuilt it today,
he'd want more data and a wider variety of video sources (surveillance
footage, webcam footage, etc).
