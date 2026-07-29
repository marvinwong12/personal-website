export const projects = [
  {
    slug: 'football-scouting-agent',
    name: 'Football Scouting Agent',
    tagline:
      'A Gemini-powered agent that discovers players, generates visualizations, and writes qualitative scouting summaries on demand.',
    description:
      'Architected a stateful, multi-tool AI scouting agent using LangGraph and Google Gemini, with Retrieval-Augmented Generation over a unified SQLite player database. The agent can pull structured stats, search narrative scouting reports for traits like injury history and personality, and generate percentile comparison charts inside an interactive Streamlit dashboard — all from a single natural-language query.',
    tech: ['LangGraph', 'Google Gemini', 'RAG', 'SQLite', 'Streamlit', 'Python'],
    status: 'live',
    github: 'https://github.com/marvinwong12/FootballScoutingAgent',
    demo: 'https://smashing-monkeys-oeza6ea4nvkwjc8ktk6len.streamlit.app/',
    metric: { label: 'Architecture', value: 'Multi-tool agent + RAG' },
  },
  {
    slug: 'aita-classifier',
    name: 'r/AITA Classifier',
    tagline:
      'A fine-tuned RoBERTa model that classifies interpersonal conflict from r/AmITheAsshole posts.',
    description:
      'Fine-tuned RoBERTa on 110k+ Reddit posts to classify interpersonal conflict, lifting Macro F1 from a 0.46 naive baseline to 0.71+. Engineered engagement and structural features (comment-to-score ratios, edit history) and used point-biserial correlation and chi-squared tests to surface the behavioral signals actually driving community verdicts. Mitigated severe class imbalance with Focal Loss and threshold tuning, then packaged the model into a FastAPI service, containerized with Docker and deployed on GCP Cloud Run.',
    tech: ['RoBERTa', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker', 'GCP Cloud Run'],
    status: 'live',
    github: 'https://github.com/marvinwong12/aita_classifier',
    demo: 'https://aita-classifier-482267030164.us-central1.run.app/',
    metric: { label: 'Macro F1', value: '0.46 → 0.71+' },
  },
  {
    slug: 'birdcall-classifier',
    name: 'BirdCall Classifier',
    tagline:
      'A bioacoustic CNN trained on the Kaggle BirdCLEF+ dataset to identify bird species from raw audio.',
    description:
      'Built an end-to-end audio pipeline that converts raw soundscape recordings into log-mel spectrograms for multi-label species identification, with amplitude normalization and noise reduction tuned for rainforest field recordings. Fine-tuned an EfficientNet classifier and applied pseudo-labeling on unlabeled audio to close the domain gap between clean and field conditions, reaching the top 10% of over 2,000 competition submissions.',
    tech: ['PyTorch', 'EfficientNet', 'CNN', 'Audio Processing', 'Log-Mel Spectrograms'],
    status: 'live',
    github: 'https://github.com/cocoa-huang/M148_Birdclef_Code',
    demo: null,
    teamProject: true,
    metric: { label: 'Result', value: 'Top 10% of 2,000 submissions' },
  },
  {
    slug: 'goodreads-recommender',
    name: 'Goodreads Recommendation Model',
    tagline:
      'A book recommendation system built on Goodreads interaction data — currently in progress.',
    description:
      'Exploring collaborative filtering and embedding-based approaches to recommend books from user interaction and rating data. Actively in development.',
    tech: ['Python', 'Recommender Systems', 'Embeddings'],
    status: 'in-progress',
    github: 'https://github.com/marvinwong12/goodreads_recommender',
    demo: null,
    metric: null,
  },
]
