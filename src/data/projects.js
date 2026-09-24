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
    name: 'Caw Call',
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
    name: 'Bookwyrm',
    tagline:
      'Multi-stage recommendation pipeline that surfaces new sci-fi and fantasy books to read based on past user history. Trained using Goodreads interaction data.',
    description:
      'A two-stage recommendation system built on the UCSD Goodreads interaction dataset (~110K books). Stage 1 blends three independent retrieval channels: 1) a LightGCN graph neural network trained via BPR loss on a k-core interaction graph, 2) sentence-transformer + FAISS semantic similarity over book descriptions, and 3) a sparse item-item co-occurrence model. These scores are fused with a dynamic weighting scheme that favors content similarity for newer users and collaborative signals as reading history grows. Stage 2 reranks the retrieved candidate pool with an XGBoost  model optimized for Net Discounted Cumulative Gain using the retrieval scores and additional author/popularity features. The pipeline handles cold-start users natively by folding new reads into an approximate graph embedding. On a time-based held-out split, the full pipeline reaches NDCG@10 of 0.1244 and HR@10 of 0.291. Deployed via Docker on Google Cloud Run.',
    tech: [
      'PyTorch',
      'PySpark',
      'Graph Neural Networks (GNN)',
      'FAISS / Vector Search',
      'Optuna',
      'FastAPI',
      'Docker',
      'Google Cloud Platform (GCP)',
    ],
    category: 'Recommender Systems',
    image: '/projects/goodreads-recommender.svg',
    modalImages: ['/projects/goodreads-recommender-demo.png'],
    status: 'live',
    github: 'https://github.com/marvinwong12/goodreads_recommender',
    demo: 'https://scifi-fantasy-recommender-1093855474171.us-central1.run.app/',
    metric: null,
  },
  {
    slug: 'visual-intelligence',
    name: 'Visual Intelligence',
    tagline:
      'An end-to-end computer vision pipeline that tracks a target individual across video footage and verifies their identity from a single reference image.',
    description:
      'Engineered an end-to-end computer vision pipeline for a Securiport-sponsored graduate capstone aimed at expediting airport security screening. Using a YOLOv8 detection model paired with a multi-object tracking algorithm, the system detects and follows a target individual across video footage starting from just a single reference image.\n\nFor identity verification, I built a system around a deep-learning face-recognition model (ArcFace) served via ONNX Runtime with GPU acceleration, aggregating cosine-similarity scores across multiple observations per tracked individual to reach 98.4% top-1 identification accuracy on a benchmark evaluation. I also deployed a Vision-Language Model (Qwen3-VL) with custom prompt engineering to generate natural-language behavior descriptions from video evidence, then built a rule-based aggregation layer to combine multi-segment predictions into one structured summary, reaching 96.4% classification accuracy on an internal evaluation set.',
    tech: ['Python', 'YOLOv8', 'ArcFace', 'ONNX Runtime', 'Qwen3-VL', 'Prompt Engineering'],
    category: 'Computer Vision',
    modalImages: ['/projects/visual-intelligence-demo.jpg'],
    status: 'in-progress',
    github: null,
    demo: null,
    metric: { label: 'ID Accuracy', value: '98.4%' },
  },
  {
    slug: 'portfolio-risk-analytics',
    name: 'Portfolio & Risk Analytics',
    tagline:
      'A full-stack portfolio optimization platform that walk-forward backtests investment strategies with bootstrapped confidence intervals, so you can tell real edge from noise.',
    description:
      'A Flask web app for mean-variance portfolio optimization, individual stock analysis, and walk-forward backtesting, built to check whether the optimization actually works out-of-sample rather than just drawing a nice efficient-frontier plot. Given a list of tickers, it pulls historical prices, computes minimum-variance and tangency (max Sharpe) portfolios with Ledoit-Wolf shrinkage covariance (long-only via a bounded SLSQP optimization), and visualizes the efficient frontier as a Monte Carlo cloud overlaid with the exact frontier curve. Each user registers an account and manages their own portfolios, with CSRF protection on every state-changing request.\n\nThe backtest walks forward through history, estimating weights at each quarterly rebalance from only the trailing 252 trading days and holding through the next 63, net of transaction costs and against equal-weight and S&P 500 benchmarks. Paired block-bootstrap confidence intervals (21-day blocks, 2,000 resamples) on every Sharpe ratio showed that on five correlated mega-cap stocks none of the differences were statistically real. On a diversified basket (SPY, BND, GLD, VNQ), minimum variance was significantly worse than equal weight (ΔSharpe -0.63, 95% CI [-1.15, -0.15]): it hit the lowest volatility and drawdown but gave up too much return.\n\nThe dashboard also runs portfolio-level risk analysis (VaR, CVaR, max drawdown, and each asset’s share of total risk versus its weight, which flagged a 42% position driving over 60% of portfolio risk) and single-stock analysis with valuation ratios, technical indicators (RSI, MACD, Bollinger Bands), and a simplified DCF. A TTL cache in front of the Yahoo Finance API cut repeat load times from ~540ms to under 1ms, and a pytest suite of 274 tests (93% coverage, run through GitHub Actions CI) guards the math, including a no-lookahead guarantee for the backtest engine. Deployed on Render.',
    tech: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'NumPy',
      'pandas',
      'scikit-learn',
      'Matplotlib',
      'pytest',
      'GitHub Actions',
      'Render',
    ],
    category: 'Quantitative Finance',
    modalImages: ['/projects/portfolio-risk-analytics-dashboard.webp'],
    status: 'live',
    github: null,
    demo: 'https://portfolio-optimization-application.onrender.com/',
    metric: { label: 'Cache Speedup', value: '500x+' },
  },
]
