export const projects = [
  {
    slug: 'football-scouting-agent',
    name: 'Chief Scout OS',
    tagline:
      'A Gemini-powered assistant scout that discovers promising football players, generates visualizations, and writes qualitative scouting summaries on demand.',
    description:
      "Chief Scout OS is a stateful, multi-tool AI scouting assistant that uses LangGraph and Google Gemini for natural language querying and responses. I store quantitative data such as advanced match statistics and transfer values in a SQLite player database, which the agent can dynamically filter and pull from to find players who match the user's description. Once a player is found, or if the user asks about a specific player, Chief Scout OS can use Retrieval Augmented Generation to query a ChromaDB Vector database and pull scouting reports for traits like injury history and personality. If no existing narrative reports can be retrieved for a player, the assistant will search the web and generate a new one which will be stored for future use. Finally, Chief Scout OS can create individual or comparative percentile charts with Matplotlib inside an interactive Streamlit dashboard.",
    tech: ['LangGraph', 'Google Gemini', 'RAG', 'SQLite', 'Streamlit', 'Python'],
    category: 'Agentic AI',
    image: '/projects/football-scouting-agent.svg',
    demoVideo: '/projects/football-scouting-agent-demo.gif',
    status: 'live',
    github: 'https://github.com/marvinwong12/FootballScoutingAgent',
    demo: 'https://smashing-monkeys-oeza6ea4nvkwjc8ktk6len.streamlit.app/',
    metric: { label: 'Architecture', value: 'Multi-tool agent + RAG' },
  },
  {
    slug: 'aita-classifier',
    name: 'r/(AI)TA',
    tagline:
      'A fine-tuned RoBERTa model that given a story, tells you whether you are in the wrong. Based on the subreddit r/AmITheAsshole.',
    description:
      'Fine-tuned RoBERTa on 110k+  r/AITA Reddit posts to classify nuanced interpersonal conflicts, achieving a Macro F1 score of 0.71+. This was a substantial lift from the 0.46 Macro F1 reached by a naive tf-idf and logistic regression baseline.  The final pipeline mitigated severe class imbalance with weak under-sampling and prediction threshold tuning. Finally, model deployment used a FastAPI service, containerized with Docker and deployed on GCP Cloud Run.\n\nFurthermore, I engineered engagement and structural features (comment-to-score ratios, edit history) and trained an additional log-reg model on both the text and metadata.  I then compared the models and conducted feature analysis using point-biserial correlation and chi-squared tests to surface the behavioral signals actually driving community verdicts. Additional error analysis was done with BerTopic for topic modeling and Matplotlib/Seaborn for visualizations.',
    tech: ['RoBERTa', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker', 'GCP Cloud Run'],
    category: 'NLP Classification',
    image: '/projects/aita-classifier.svg',
    modalImages: [
      '/projects/aita-classifier-header.png',
      '/projects/aita-classifier-error-landscape.png',
    ],
    status: 'live',
    github: 'https://github.com/marvinwong12/aita_classifier',
    demo: 'https://aita-classifier-482267030164.us-central1.run.app/',
    metric: { label: 'Macro F1', value: '0.46 → 0.71+' },
  },
  {
    slug: 'birdcall-classifier',
    name: 'BirdCLEF Birdcall Detector',
    tagline:
      'A bioacoustic CNN trained on the Kaggle BirdCLEF+ dataset to identify bird species from raw audio.',
    description:
      'Architected an end-to-end audio pipeline that converts raw 5-10 second samples into log-mel spectrograms for multi-label species identification, with amplitude normalization, power filtering and noise reduction tuned for rainforest field recordings. Fine-tuned an EfficientNet classifier and applied an iterative pseudo-labeling/model training process to close the domain shift between clean, labeled training examples and unlabeled, held-out "soundscapes". Model achieved final test accuracy of 86%.',
    tech: ['PyTorch', 'EfficientNet', 'CNN', 'Audio Processing', 'Log-Mel Spectrograms'],
    category: 'Bioacoustic ML',
    image: '/projects/birdcall-classifier.svg',
    status: 'live',
    github: 'https://github.com/cocoa-huang/M148_Birdclef_Code',
    demo: null,
    teamProject: true,
    metric: { label: 'Result', value: 'Top 10% of 2,000 submissions' },
  },
  {
    slug: 'goodreads-recommender',
    name: 'Sci-fi and Fantasy Book Recommendation Model',
    tagline:
      'Multi-stage recommendation pipeline that surfaces new sci-fi and fantasy books to read based on past user history. Trained using Goodreads interaction data.',
    description:
      'Exploring collaborative filtering and embedding-based approaches to recommend books from user interaction and rating data. Actively in development.',
    tech: ['Python', 'Recommender Systems', 'Embeddings'],
    category: 'Recommender Systems',
    image: '/projects/goodreads-recommender.svg',
    status: 'in-progress',
    github: 'https://github.com/marvinwong12/goodreads_recommender',
    demo: null,
    metric: null,
  },
]
