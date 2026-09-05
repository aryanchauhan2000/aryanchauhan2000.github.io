/*
=========================================
PAPER DATABASE
=========================================

Add your papers here.

Example:

{
    title: "Paper title",
    authors: "Author et al.",
    year: 2026,
    topic: "LLM",
    description: "Short description",
    link: "https://..."
}

*/

const papers = [

    {
        title: "Attention Is All You Need",
        authors: "Vaswani et al.",
        year: 2017,
        topic: "Transformers",
        description:
            "The foundational paper introducing the Transformer architecture.",
        link:
            "https://arxiv.org/abs/1706.03762"
    },

    {
        title:
            "FlashAttention: Fast and Memory-Efficient Exact Attention",
        authors: "Tri Dao et al.",
        year: 2022,
        topic: "LLM",
        description:
            "An important paper for understanding efficient attention computation.",
        link:
            "https://arxiv.org/abs/2205.14135"
    },

    {
        title:
            "FlashAttention-2: Faster Attention with Better Parallelism",
        authors: "Tri Dao",
        year: 2023,
        topic: "Systems",
        description:
            "Improves parallelism and GPU utilization for attention.",
        link:
            "https://arxiv.org/abs/2307.08691"
    },

    {
        title:
            "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        authors: "Patrick Lewis et al.",
        year: 2020,
        topic: "LLM",
        description:
            "Introduced the RAG approach for combining retrieval with generation.",
        link:
            "https://arxiv.org/abs/2005.11401"
    },

    {
        title:
            "A Survey of Large Language Models",
        authors: "Humza Naveed et al.",
        year: 2023,
        topic: "LLM",
        description:
            "A broad overview of large language model research.",
        link:
            "https://arxiv.org/abs/2307.06435"
    },

    {
        title:
            "The Hardware Lottery",
        authors: "Sara Hooker",
        year: 2021,
        topic: "Systems",
        description:
            "Explores how hardware availability influences AI research.",
        link:
            "https://arxiv.org/abs/2009.06489"
    }

];


/*
=========================================
PAPER RENDERING
=========================================
*/

const paperList =
    document.getElementById("paperList");

const searchInput =
    document.getElementById("paperSearch");

const topicFilter =
    document.getElementById("topicFilter");


function displayPapers() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();

    const selectedTopic =
        topicFilter.value;


    const filteredPapers =
        papers.filter(paper => {

            const searchableText = (
                paper.title +
                " " +
                paper.authors +
                " " +
                paper.topic +
                " " +
                paper.description
            ).toLowerCase();


            const matchesSearch =
                searchableText.includes(searchTerm);


            const matchesTopic =
                selectedTopic === "all" ||
                paper.topic === selectedTopic;


            return (
                matchesSearch &&
                matchesTopic
            );

        });


    paperList.innerHTML = "";


    if (filteredPapers.length === 0) {

        paperList.innerHTML = `
            <div class="paper-card">
                <p>No papers found.</p>
            </div>
        `;

        return;

    }


    filteredPapers.forEach(paper => {

        const article =
            document.createElement("article");


        article.className =
            "paper-card";


        article.innerHTML = `

            <div class="tags">

                <span>
                    ${paper.topic}
                </span>

                <span>
                    ${paper.year}
                </span>

            </div>


            <h3>
                ${paper.title}
            </h3>


            <p>
                ${paper.authors}
            </p>


            <p>
                ${paper.description}
            </p>


            <a
                href="${paper.link}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Read paper →
            </a>

        `;


        paperList.appendChild(article);

    });

}


/*
=========================================
SEARCH
=========================================
*/

searchInput.addEventListener(
    "input",
    displayPapers
);


/*
=========================================
FILTER
=========================================
*/

topicFilter.addEventListener(
    "change",
    displayPapers
);


/*
=========================================
INITIALIZE
=========================================
*/

displayPapers();

