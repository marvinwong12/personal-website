## What's your greatest achievement so far?

Probably the Securiport capstone Marvin is doing for his Master's — an
end-to-end multimodal pipeline that helps expedite airport security
screening. He used PyTorch to wire together vision models (YOLOv8 for
detection, DINOv2 for feature extraction), then built a vector-based search
engine with cosine similarity and multi-object tracking so the system can
keep track of a person's identity across a continuous video stream. It
ended up hitting 98.40% track-level identification accuracy. He's proud of
it because it's not a toy problem — it's real infrastructure with real
stakes, and it forced him to combine a lot of different pieces (detection,
embeddings, retrieval, tracking) into one system that actually works end to
end, not just a notebook that runs once.

## Tell me about a time you failed — what did you learn?

The r/AITA classifier project. Going in, Marvin wanted to test a theory:
that Reddit is enough of a "hivemind" that you could predict the
community's verdict from the text of a post alone. A simple TF-IDF
baseline barely worked, so he fine-tuned a RoBERTa model instead, which
helped, but honestly it still didn't perform as well as he wanted. Digging
deeper and training a TF-IDF/logistic-regression model on the text
combined with the metadata, he found it improved a lot over the baseline —
proving his original text-only hypothesis a bit wrong, since the models he
fine-tuned couldn't fully handle the nuances of social convention and
interpersonal relationships. A larger, more advanced model might have done
better. But honestly, the deep dive into feature importance and error
analysis was just as fulfilling as building a successful model would have
been — it was interesting to see exactly where the models failed and look
at what could improve them.

## Where do you see yourself in 5 years?

Short term, Marvin wants to land a Data Scientist or ML Engineer role where
he can own problems end to end — from messy raw data to a model that's
actually deployed and used by real people, not just a notebook. Longer
term, he'd like to grow into someone who leads applied ML work, probably
around agentic systems and production ML pipelines, since that's the
intersection he keeps gravitating toward in his own projects. Five years
out, he'd like to be the person a team trusts to take a vague, noisy
problem and turn it into something shipped — and to have built up enough
depth that he's mentoring other people the way a few professors and
managers did for him.

## Why should we hire you over another candidate?

Because Marvin can operate across the whole pipeline, not just one slice of
it. He's cleaned and consolidated multi-gigabyte, messy real-world
datasets, built and fine-tuned models (RoBERTa, PyTorch, Scikit-learn), and
actually shipped them — containerized with Docker, served through FastAPI,
deployed on GCP Cloud Run. A lot of candidates can do one of those well;
fewer have done data engineering, modeling, and deployment on projects they
built themselves, start to finish. He's also sat on the client-facing side
— he's worked as a student supervisor at a university-run cafe, and at PwC
he helped run workshops that got 80% of a team onto a brand-new system, so
he knows how to translate data findings or models to non-technical
stakeholders and navigate messy client relationships. A lot of his best
work has come from projects nobody assigned him — he built things about
football, Reddit, and books because he was personally curious and
passionate about those subjects, which says something about how he'll
approach problems on a team, too. He also has domain knowledge outside pure
ML — he's worked with climate and environmental data — so if that's a niche
a team is hiring into, he could be that person.

## What's something you're currently curious about or teaching yourself?

Right now, as a side project at UCLA, Marvin is working on testing and
refining a retrieval and matching system that uses geometric analysis, plus
an automated preprocessing workflow with vision-based embedding models —
that's genuinely the thing he's most excited about right now, since it's
pushing him into more rigorous geometric/embedding-based methods than he'd
used before. Outside of that, he's actively trying to upskill his
production deployment and cloud skills — he's comfortable with things like
Spark, Databricks, and cloud deployment, but hasn't used them at real
industry scale yet, so that's a deliberate gap he's closing. He's also
curious how a modern frontier LLM would do on his old r/AITA classifier
problem compared to his fine-tuned RoBERTa model — that's on his list of
side projects to revisit at some point.
