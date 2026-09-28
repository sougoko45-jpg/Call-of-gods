/*
    ╔══════════════════════════════════╗
             CALL OF GODS
            CORE SYSTEM
    ╚══════════════════════════════════╝
*/


/* =========================================
   CONFIGURAÇÃO
========================================= */

const ATTRIBUTES = [

    {
        name: "Força",
        description:
            "Poder físico, impacto e capacidade corporal."
    },

    {
        name: "Agilidade",
        description:
            "Velocidade, reflexos e movimentação."
    },

    {
        name: "Vigor",
        description:
            "Resistência física e capacidade de suportar dano."
    },

    {
        name: "Intelecto",
        description:
            "Raciocínio, conhecimento e análise."
    },

    {
        name: "Percepção",
        description:
            "Atenção, sentidos e leitura do ambiente."
    },

    {
        name: "Espírito",
        description:
            "Força espiritual e conexão sobrenatural."
    }

];


const SKILLS = [

    ["Luta", "Força"],
    ["Pontaria", "Percepção"],
    ["Armas", "Força"],
    ["Atletismo", "Força"],
    ["Acrobacia", "Agilidade"],

    ["Heráldica", "Intelecto"],
    ["Religião", "Intelecto"],
    ["História", "Intelecto"],
    ["Mitologia", "Intelecto"],
    ["Arcana", "Espírito"],
    ["Investigação", "Intelecto"],

    ["Oratória", "Intelecto"],
    ["Persuasão", "Espírito"],
    ["Intimidação", "Força"],
    ["Enganação", "Intelecto"],
    ["Diplomacia", "Percepção"],

    ["Furtividade", "Agilidade"],
    ["Percepção", "Percepção"],
    ["Sobrevivência", "Percepção"],
    ["Medicina", "Intelecto"],
    ["Navegação", "Percepção"],

    ["Intuição", "Percepção"],
    ["Vontade", "Espírito"],
    ["Conhecimento", "Intelecto"]

];


const TREE = {

    Vanguarda: [

        ["start", "INÍCIO", 0, 50, 50, ""],

        ["impacto", "Impacto", 1, 16, 18, ""],
        ["guarda", "Guarda", 1, 16, 43, ""],
        ["passo", "Passo Rápido", 1, 16, 68, ""],

        ["forca", "Força Bruta", 2, 31, 18, "impacto"],
        ["pesado", "Golpe Pesado", 2, 46, 18, "forca"],
        ["rompedor", "Rompedor", 3, 61, 18, "pesado"],
        ["furia", "Fúria", 3, 76, 18, "rompedor"],
        ["devastacao", "Devastação", 4, 90, 30, "furia"],

        ["fortificado", "Fortificado", 2, 31, 43, "guarda"],
        ["resiliencia", "Resiliência", 2, 46, 43, "fortificado"],
        ["interposicao", "Interposição", 3, 61, 43, "resiliencia"],
        ["muralha", "Muralha", 3, 76, 43, "interposicao"],
        ["indestrutivel", "Indestrutível", 4, 90, 55, "muralha"],

        ["reacao", "Reação", 2, 31, 68, "passo"],
        ["esquiva", "Esquiva", 2, 46, 68, "reacao"],
        ["contra", "Contra-Ataque", 3, 61, 68, "esquiva"],
        ["passoVanguarda", "Passo do Vanguarda", 3, 76, 68, "contra"],
        ["velocidade", "Velocidade Absoluta", 4, 90, 68, "passoVanguarda"],

        ["instinto", "Instinto de Combate", 3, 76, 36, "rompedor,contra"],
        ["maestria", "Maestria Física", 3, 76, 58, "muralha,contra"],

        ["mestre", "Mestre da Vanguarda", 4, 90, 36, "instinto,maestria"],

        ["apoteose", "APOTEOSE", 5, 96, 50,
            "mestre,devastacao,indestrutivel,velocidade"]

    ],


    Virtuoso: [

        ["start", "INÍCIO", 0, 50, 50, ""],

        ["observador", "Observador", 1, 16, 18, ""],
        ["mente", "Mente Analítica", 1, 16, 43, ""],
        ["passo", "Passo Preciso", 1, 16, 68, ""],

        ["deducao", "Dedução", 2, 31, 18, "observador"],
        ["leitura", "Leitura de Situação", 2, 46, 18, "deducao"],
        ["investigador", "Investigador", 3, 61, 18, "leitura"],
        ["especialista", "Especialista", 4, 76, 30, "investigador"],

        ["concentracao", "Concentração", 2, 31, 43, "mente"],
        ["memoria", "Memória Treinada", 2, 46, 43, "concentracao"],
        ["estrategia", "Estratégia", 3, 61, 43, "memoria"],
        ["improviso", "Improviso", 3, 76, 43, "estrategia"],

        ["maos", "Mãos Leves", 2, 31, 68, "passo"],
        ["evasao", "Evasão", 3, 46, 68, "maos"],
        ["influencia", "Influência", 3, 61, 68, "evasao"],
        ["adaptacao", "Adaptação", 3, 76, 68, "influencia"],
        ["versatilidade", "Versatilidade", 4, 90, 68, "adaptacao"],

        ["mestre", "Mestre do Virtuoso", 4, 90, 43,
            "especialista,improviso"],

        ["apoteose", "APOTEOSE", 5, 97, 52,
            "mestre,versatilidade"]

    ],


    Místico: [

        ["start", "INÍCIO", 0, 50, 50, ""],

        ["canalizacao", "Canalização", 1, 16, 18, ""],
        ["vontade", "Vontade Arcana", 1, 16, 43, ""],
        ["visao", "Visão Sobrenatural", 1, 16, 68, ""],

        ["fluxo", "Fluxo Divino", 2, 31, 18, "canalizacao"],
        ["manifestacao", "Manifestação", 2, 46, 18, "fluxo"],
        ["potencia", "Potência Divina", 3, 61, 18, "manifestacao"],
        ["controle", "Controle de Energia", 3, 76, 18, "potencia"],
        ["ascensao", "Ascensão", 4, 90, 30, "controle"],

        ["barreira", "Barreira Espiritual", 2, 31, 43, "vontade"],
        ["resistencia", "Resistência Mística", 2, 46, 43, "barreira"],
        ["protecao", "Proteção Divina", 3, 61, 43, "resistencia"],
        ["milagre", "Milagre", 4, 76, 43, "protecao"],

        ["pressagio", "Presságio", 2, 31, 68, "visao"],
        ["ritualista", "Ritualista", 3, 46, 68, "pressagio"],
        ["oraculo", "Olhos do Oráculo", 3, 61, 68, "ritualista"],

        ["avatar", "Avatar Divino", 4, 90, 43,
            "ascensao,milagre"],

        ["apoteose", "APOTEOSE MÍSTICA", 5, 97, 52,
            "avatar,oraculo"]

    ]

};


/* =========================================
   DESCRIÇÕES DA SKILL TREE
========================================= */

const NODE_DESCRIPTION = {

    impacto:
        "Receba +1 de dano em ações físicas.",

    guarda:
        "Receba +1 em testes relacionados à resistência física.",

    passo:
        "+1 em testes de Agilidade relacionados à movimentação.",

    forca:
        "+1 em testes de Força para ações físicas.",

    pesado:
        "Aprimora o impacto de ataques físicos.",

    rompedor:
        "Permite superar parte das vantagens defensivas de um adversário.",

    furia:
        "Quando seus PV estão abaixo da metade, recebe um bônus físico.",

    devastacao:
        "Aumenta significativamente o potencial de um ataque.",

    fortificado:
        "+1 na Redução de Dano.",

    resiliencia:
        "+5 PV máximos.",

    interposicao:
        "Permite proteger um aliado de parte do dano recebido.",

    muralha:
        "Aumenta seus benefícios defensivos enquanto protege alguém.",

    indestrutivel:
        "Uma vez por cena, pode permanecer com 1 PV diante de um golpe decisivo.",

    reacao:
        "+1 em Iniciativa.",

    esquiva:
        "Uma vez por cena, permite repetir um teste de Agilidade defensivo.",

    contra:
        "Após evitar um ataque, recebe bônus na próxima ação ofensiva.",

    passoVanguarda:
        "Melhora suas opções de movimentação durante um confronto.",

    velocidade:
        "Uma vez por cena, permite realizar uma movimentação adicional.",

    instinto:
        "Após um Sucesso Crítico, escolha entre benefício ofensivo ou defensivo.",

    maestria:
        "Escolha Força, Agilidade ou Vigor para receber um aprimoramento permanente.",

    mestre:
        "Permite combinar os caminhos avançados da Vanguarda.",

    apoteose:
        "O ápice da evolução da classe.",

    observador:
        "Aprimora sua capacidade de observar detalhes.",

    mente:
        "Melhora testes relacionados a raciocínio e análise.",

    deducao:
        "Recebe bônus quando utiliza informações para chegar a uma conclusão.",

    leitura:
        "Identifica padrões e oportunidades em uma situação.",

    investigador:
        "Aprimora testes de Investigação.",

    especialista:
        "Escolha uma perícia para receber uma especialização.",

    concentracao:
        "Resiste melhor a distrações.",

    memoria:
        "Recebe bônus em testes que dependem de memória.",

    estrategia:
        "Planejamento gera vantagens adicionais.",

    improviso:
        "Recebe bônus ao encontrar soluções inesperadas.",

    maos:
        "Aprimora tarefas delicadas e discretas.",

    evasao:
        "Melhora sua capacidade de evitar perigos.",

    influencia:
        "Aprimora Persuasão, Diplomacia e interações.",

    adaptacao:
        "Recebe benefícios quando muda sua abordagem.",

    versatilidade:
        "Permite combinar especializações diferentes.",

    canalizacao:
        "Aprimora a canalização de energia divina.",

    vontade:
        "Fortalece sua determinação espiritual.",

    visao:
        "Permite perceber manifestações sobrenaturais.",

    fluxo:
        "Aumenta a eficiência de poderes.",

    manifestacao:
        "Permite manifestações sobrenaturais mais poderosas.",

    potencia:
        "Aumenta a potência de habilidades místicas.",

    controle:
        "Melhora o controle de energia sobrenatural.",

    ascensao:
        "Habilidade avançada de domínio místico.",

    barreira:
        "Cria proteção espiritual.",

    resistencia:
        "Melhora a resistência contra efeitos sobrenaturais.",

    protecao:
        "Concede proteção divina a si ou a aliados.",

    milagre:
        "Permite realizar efeitos sobrenaturais excepcionais.",

    pressagio:
        "Recebe sinais e presságios.",

    ritualista:
        "Aprimora rituais e preparação.",

    oraculo:
        "Amplia a percepção de possibilidades.",

    avatar:
        "Manifesta uma conexão intensa com sua divindade."

};


/* =========================================
   BANCO LOCAL
========================================= */

let database =
    JSON.parse(
        localStorage.getItem("callOfGodsDatabase")
    ) || {

        current: null,

        characters: {}

    };


let currentTreeClass = "Vanguarda";


/* =========================================
   UTILIDADES
========================================= */

function $(id) {

    return document.getElementById(id);

}


function saveDatabase() {

    localStorage.setItem(
        "callOfGodsDatabase",
        JSON.stringify(database)
    );

    updateSaveStatus();

}


function updateSaveStatus() {

    const element =
        $("saveStatus");

    if (!element)
        return;

    const time =
        new Date().toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    element.textContent =
        `● SALVO · ${time}`;

}


/* =========================================
   NOVO PERSONAGEM
========================================= */

function createCharacter() {

    const attributes = {};

    ATTRIBUTES.forEach(attribute => {

        attributes[attribute.name] = 3;

    });


    const skills = {};

    SKILLS.forEach(skill => {

        skills[skill[0]] = 0;

    });


    return {

        name: "",

        age: "",

        race: "Humano",

        origin: "",

        class: "Vanguarda",

        divineType: "Filho dos Deuses",

        god: "Hebe",

        title: "",

        personality: "",

        goals: "",

        history: "",

        calling: "",

        powers: "",

        equipment: "",

        level: 20,

        attributes,

        skills,

        trees: {

            Vanguarda: {},

            Virtuoso: {},

            Místico: {}

        }

    };

}


function getCurrentCharacter() {

    if (
        !database.current ||
        !database.characters[database.current]
    ) {

        const id =
            crypto.randomUUID
                ? crypto.randomUUID()
                : Date.now().toString();

        database.current = id;

        database.characters[id] =
            createCharacter();

        saveDatabase();

    }

    return database.characters[
        database.current
    ];

}


/* =========================================
   NAVEGAÇÃO
========================================= */

function openPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(section => {

            section.classList.remove(
                "active"
            );

        });


    let target = page;

    if (page === "skills")
        target = "skillsPage";


    const section =
        $(target);

    if (!section)
        return;


    section.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    document
        .querySelector(".topbar")
        ?.classList.remove(
            "menu-open"
        );

}


document
    .querySelectorAll("[data-page]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openPage(
                    button.dataset.page
                );

            }
        );

    });


$("mobileMenu")
    ?.addEventListener(
        "click",
        () => {

            document
                .querySelector(".topbar")
                .classList.toggle(
                    "menu-open"
                );

        }
    );


/* =========================================
   FICHA
========================================= */

function renderCharacter() {

    const character =
        getCurrentCharacter();


    document
        .querySelectorAll("[data-field]")
        .forEach(element => {

            const key =
                element.dataset.field;

            element.value =
                character[key] ?? "";

        });


    $("characterNameDisplay")
        .textContent =
            character.name ||
            "PERSONAGEM SEM NOME";


    renderAttributes();

    renderSkills();

    calculateStats();

}


function renderAttributes() {

    const character =
        getCurrentCharacter();


    $("attributes").innerHTML =
        ATTRIBUTES
            .map(attribute => {

                const value =
                    character.attributes[
                        attribute.name
                    ] ?? 0;


                return `

                <div class="attribute">

                    <div class="attribute-head">

                        <span class="attribute-name">
                            ${attribute.name}
                        </span>

                        <input
                            type="number"
                            min="0"
                            max="35"
                            value="${value}"
                            data-attribute="${attribute.name}"
                        >

                    </div>

                    <div class="attribute-desc">
                        ${attribute.description}
                    </div>

                </div>

                `;

            })
            .join("");

}


function renderSkills() {

    const character =
        getCurrentCharacter();


    $("skills").innerHTML =
        SKILLS
            .map(skill => {

                const name =
                    skill[0];

                const attribute =
                    skill[1];

                const value =
                    character.skills[name] ?? 0;


                return `

                <div class="skill">

                    <span>
                        ${name}
                        ·
                        ${attribute}
                    </span>

                    <input
                        type="number"
                        min="0"
                        value="${value}"
                        data-skill="${name}"
                    >

                </div>

                `;

            })
            .join("");

}


function calculateStats() {

    const character =
        getCurrentCharacter();


    const vigor =
        Number(
            character.attributes.Vigor
        ) || 0;


    const spirit =
        Number(
            character.attributes.Espírito
        ) || 0;


    const agility =
        Number(
            character.attributes.Agilidade
        ) || 0;


    const perception =
        Number(
            character.attributes.Percepção
        ) || 0;


    const pv =
        50 +
        vigor * 10;


    const pe =
        30 +
        spirit * 5;


    const defense =
        vigor;


    const initiative =
        agility +
        perception;


    $("pv").textContent =
        pv;

    $("pe").textContent =
        pe;

    $("defense").textContent =
        defense;

    $("initiative").textContent =
        initiative;

}


document.addEventListener(
    "input",
    event => {

        const element =
            event.target;

        if (
            element.dataset.field
        ) {

            const character =
                getCurrentCharacter();

            character[
                element.dataset.field
            ] =
                element.value;

            saveDatabase();

            renderCharacter();

        }


        if (
            element.dataset.attribute
        ) {

            const character =
                getCurrentCharacter();

            character.attributes[
                element.dataset.attribute
            ] =
                Math.max(
                    0,
                    Math.min(
                        35,
                        Number(element.value) || 0
                    )
                );

            saveDatabase();

            calculateStats();

        }


        if (
            element.dataset.skill
        ) {

            const character =
                getCurrentCharacter();

            character.skills[
                element.dataset.skill
            ] =
                Math.max(
                    0,
                    Number(element.value) || 0
                );

            saveDatabase();

        }

    }
);


/* =========================================
   NOVO PERSONAGEM
========================================= */

$("newCharacter")
    ?.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Criar um novo personagem? O personagem atual continuará salvo."
                );


            if (!confirmed)
                return;


            const id =
                crypto.randomUUID
                    ? crypto.randomUUID()
                    : Date.now().toString();


            database.characters[id] =
                createCharacter();

            database.current =
                id;


            saveDatabase();

            renderCharacter();

            renderSkillTree();

        }
    );


/* =========================================
   GERENCIAR PERSONAGENS
========================================= */

$("manageCharacters")
    ?.addEventListener(
        "click",
        openCharacterManager
    );


function openCharacterManager() {

    const rows =
        Object.entries(
            database.characters
        )
        .map(
            ([id, character]) => `

                <div class="character-row">

                    <div>

                        <b>
                            ${
                                escapeHTML(
                                    character.name ||
                                    "Sem nome"
                                )
                            }
                        </b>

                        <small>
                            ${character.class}
                            ·
                            ${character.god}
                        </small>

                    </div>

                    <div class="character-row-actions">

                        <button
                            class="btn-secondary"
                            onclick="switchCharacter('${id}')">

                            ABRIR

                        </button>

                        <button
                            class="btn-secondary"
                            onclick="deleteCharacter('${id}')">

                            EXCLUIR

                        </button>

                    </div>

                </div>

            `
        )
        .join("");


    openModal(`

        <span class="eyebrow">
            REGISTROS
        </span>

        <h2>
            MEUS PERSONAGENS
        </h2>

        <p style="color:#817983;margin:10px 0 20px">
            Os personagens são salvos automaticamente
            neste navegador.
        </p>

        ${rows}

    `);

}


window.switchCharacter =
    function(id) {

        database.current =
            id;

        saveDatabase();

        closeModal();

        renderCharacter();

        renderSkillTree();

        openPage(
            "character"
        );

    };


window.deleteCharacter =
    function(id) {

        if (
            Object.keys(
                database.characters
            ).length <= 1
        ) {

            alert(
                "Você precisa manter pelo menos um personagem."
            );

            return;

        }


        if (
            !confirm(
                "Excluir este personagem?"
            )
        )
            return;


        delete database.characters[id];


        database.current =
            Object.keys(
                database.characters
            )[0];


        saveDatabase();

        closeModal();

        renderCharacter();

        renderSkillTree();

    };


/* =========================================
   MODAL
========================================= */

function openModal(content) {

    $("modalContent")
        .innerHTML =
        content;

    $("modal")
        .classList.add(
            "active"
        );

}


function closeModal() {

    $("modal")
        .classList.remove(
            "active"
        );

}


$("closeModal")
    ?.addEventListener(
        "click",
        closeModal
    );


$("modal")
    ?.addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "modal"
            ) {

                closeModal();

            }

        }
    );


/* =========================================
   EXPORTAR
========================================= */

$("exportCharacter")
    ?.addEventListener(
        "click",
        () => {

            const character =
                getCurrentCharacter();


            downloadJSON(
                character,
                "call-of-gods-personagem.json"
            );

        }
    );


function downloadJSON(
    data,
    filename
) {

    const blob =
        new Blob(
            [
                JSON.stringify(
                    data,
                    null,
                    2
                )
            ],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href = url;

    link.download =
        filename;

    link.click();


    URL.revokeObjectURL(
        url
    );

}


/* =========================================
   SKILL TREE
========================================= */

function getTree() {

    return TREE[
        currentTreeClass
    ];

}


function getUnlocked() {

    const character =
        getCurrentCharacter();


    return character.trees[
        currentTreeClass
    ];

}


function getTotalPoints() {

    const character =
        getCurrentCharacter();


    return (
        Math.max(
            0,
            character.level - 1
        )
        *
        3
    );

}


function getUsedPoints() {

    const unlocked =
        getUnlocked();


    return Object.keys(
        unlocked
    )
    .reduce(
        (total, id) => {

            const node =
                getTree()
                    .find(
                        n => n[0] === id
                    );


            return total +
                (
                    node
                        ? node[2]
                        : 0
                );

        },
        0
    );

}


function getNodeStatus(node) {

    const id =
        node[0];


    if (id === "start")
        return "unlocked";


    const unlocked =
        getUnlocked();


    if (unlocked[id])
        return "unlocked";


    const requirements =
        node[5]
            ? node[5]
                .split(",")
                .filter(Boolean)
            : [];


    const requirementsMet =
        requirements.every(
            requirement =>
                unlocked[requirement]
        );


    const remaining =
        getTotalPoints()
        -
        getUsedPoints();


    if (
        requirementsMet &&
        remaining >= node[2]
    ) {

        return "available";

    }


    return "locked";

}


function renderSkillTree() {

    const container =
        $("treeCanvas");


    if (!container)
        return;


    const tree =
        getTree();


    container.innerHTML = `

        <div class="tree-canvas">

            <svg
                class="tree-svg"
                viewBox="0 0 1000 650"
                preserveAspectRatio="none">
            </svg>

        </div>

    `;


    const canvas =
        container.querySelector(
            ".tree-canvas"
        );


    const svg =
        canvas.querySelector(
            ".tree-svg"
        );


    /*
        LINHAS
    */

    tree.forEach(node => {

        const requirements =
            node[5]
                ? node[5]
                    .split(",")
                    .filter(Boolean)
                : [];


        requirements.forEach(
            requirement => {

                const parent =
                    tree.find(
                        n =>
                            n[0] ===
                            requirement
                    );


                if (!parent)
                    return;


                const line =
                    document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "line"
                    );


                line.setAttribute(
                    "x1",
                    parent[3] * 10
                );

                line.setAttribute(
                    "y1",
                    parent[4] * 6.5
                );

                line.setAttribute(
                    "x2",
                    node[3] * 10
                );

                line.setAttribute(
                    "y2",
                    node[4] * 6.5
                );


                if (
                    getUnlocked()[
                        requirement
                    ]
                ) {

                    line.classList.add(
                        "active"
                    );

                }


                line.classList.add(
                    "tree-line"
                );


                svg.appendChild(
                    line
                );

            }
        );

    });


    /*
        NÓS
    */

    tree.forEach(node => {

        const button =
            document.createElement(
                "button"
            );


        const status =
            getNodeStatus(
                node
            );


        button.className =
            "tree-node " +
            status;


        if (
            node[0] ===
            "apoteose"
        ) {

            button.classList.add(
                "final"
            );

        }


        button.style.left =
            node[3] + "%";


        button.style.top =
            node[4] + "%";


        button.innerHTML = `

            <b>
                ${node[1]}
            </b>

            ${
                node[2]
                    ? `
                        <small>
                            ${node[2]}
                            PONTO
                            ${node[2] > 1 ? "S" : ""}
                        </small>
                      `
                    : ""
            }

        `;


        button.addEventListener(
            "click",
            () =>
                showNodeInfo(
                    node
                )
        );


        canvas.appendChild(
            button
        );

    });


    $("points")
        .textContent =
        getTotalPoints()
        -
        getUsedPoints();


    $("level").value =
        getCurrentCharacter()
            .level;

}


function showNodeInfo(node) {

    const status =
        getNodeStatus(
            node
        );


    const requirements =
        node[5]
            ? node[5]
                .split(",")
                .filter(Boolean)
            : [];


    const requirementText =
        requirements.length
            ? requirements
                .map(
                    requirement => {

                        const found =
                            getTree()
                                .find(
                                    n =>
                                        n[0] ===
                                        requirement
                                );

                        return `
                            •
                            ${
                                found
                                    ? found[1]
                                    : requirement
                            }
                        `;

                    }
                )
                .join("<br>")
            : "Nenhum";


    $("nodeInfo")
        .innerHTML = `

        <span class="eyebrow">
            HABILIDADE
        </span>

        <h2>
            ${node[1]}
        </h2>

        <div class="node-cost">

            ${node[2]}
            PONTO
            ${node[2] > 1 ? "S" : ""}

        </div>

        <p>

            ${
                NODE_DESCRIPTION[
                    node[0]
                ] ||
                "Habilidade especial da classe."
            }

        </p>

        <div class="node-requirements">

            <b>
                REQUISITOS
            </b>

            <br>

            ${requirementText}

        </div>

        ${
            status === "available"
                ? `
                    <button
                        class="btn-primary"
                        style="width:100%;margin-top:20px"
                        id="unlockNode">

                        DESBLOQUEAR

                    </button>
                  `
                : ""
        }

        `;


    if (
        status ===
        "available"
    ) {

        $("unlockNode")
            .addEventListener(
                "click",
                () => {

                    const character =
                        getCurrentCharacter();


                    character.trees[
                        currentTreeClass
                    ][node[0]] =
                        true;


                    saveDatabase();

                    renderSkillTree();

                    showNodeInfo(
                        node
                    );

                }
            );

    }

}


/* =========================================
   CONTROLES DA ÁRVORE
========================================= */

$("treeClass")
    ?.addEventListener(
        "change",
        event => {

            currentTreeClass =
                event.target.value;

            renderSkillTree();

        }
    );


$("level")
    ?.addEventListener(
        "change",
        event => {

            const character =
                getCurrentCharacter();


            character.level =
                Math.max(
                    1,
                    Math.min(
                        20,
                        Number(
                            event.target.value
                        ) || 1
                    )
                );


            saveDatabase();

            renderSkillTree();

        }
    );


$("resetTree")
    ?.addEventListener(
        "click",
        () => {

            if (
                !confirm(
                    "Resetar a Skill Tree desta classe?"
                )
            )
                return;


            const character =
                getCurrentCharacter();


            character.trees[
                currentTreeClass
            ] = {};


            saveDatabase();

            renderSkillTree();

            $("nodeInfo")
                .innerHTML = `

                <div class="node-empty">

                    <div>✦</div>

                    <h2>
                        ÁRVORE RESETADA
                    </h2>

                    <p>
                        Seus pontos estão disponíveis
                        novamente.
                    </p>

                </div>

                `;

        }
    );


/* =========================================
   BACKUP COMPLETO
========================================= */

function createBackupButton() {

    const button =
        document.createElement(
            "button"
        );


    button.className =
        "btn-secondary";


    button.textContent =
        "BACKUP";


    button.addEventListener(
        "click",
        exportDatabase
    );


    document
        .querySelector(
            ".page-actions"
        )
        ?.appendChild(
            button
        );

}


function exportDatabase() {

    downloadJSON(
        database,
        "call-of-gods-backup.json"
    );

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /[&<>"']/g,
            character => {

                const map = {

                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                };

                return map[
                    character
                ];

            }
        );

}


/* =========================================
   INICIALIZAÇÃO
========================================= */

function initialize() {

    getCurrentCharacter();

    renderCharacter();

    renderSkillTree();

    createBackupButton();

}


initialize();
