const allQuestions = {
    mcq: [
        {
            q: "During Gram staining, a bacterial cell that retains the crystal violet–iodine complex after alcohol treatment will appear purple. This result is mainly due to which structural characteristic of the bacterial cell wall?",
            options: ["Presence of an outer lipid membrane", "Thick peptidoglycan layer that traps the dye complex", "Absence of a cell wall", "Presence of nuclear membrane"],
            answer: "Thick peptidoglycan layer that traps the dye complex"
        },
        {
            q: "A student observes oval shaped fungal cells reproducing by the formation of small outgrowths that later separate from the parent cell. Which organism and method of reproduction is being observed?",
            options: ["Rhizopus using fragmentation", "Penicillium using spore germination", "Yeast using budding", "Mushroom using basidiospore formation"],
            answer: "Yeast using budding"
        },
        {
            q: "When preparing a bacterial smear, heat fixing is performed before staining. What is the primary purpose of this step in relation to the bacterial cells and the glass slide?",
            options: ["To increase the size of bacterial cells", "To make the slide easier to handle", "To kill the bacteria and make them adhere to the slide", "To add color contrast to the bacteria"],
            answer: "To kill the bacteria and make them adhere to the slide"
        },
        {
            q: "During the DNA extraction experiment, cold alcohol is gently added to the solution and a white, cloudy material appears at the interface. What does this visible material represent?",
            options: ["Denatured proteins", "Cellular debris", "Precipitated DNA molecules", "Dissolved lipids"],
            answer: "Precipitated DNA molecules"
        },
        {
            q: "A student performs Benedict’s test on a food sample and observes a color change from blue to orange-brown precipitate after heating. What conclusion should the student make about the chemical composition of the sample?",
            options: ["It contains starch", "It contains lipids", "It contains reducing sugars", "It contains proteins"],
            answer: "It contains reducing sugars"
        },
        {
            q: "While observing onion epidermal cells placed in a concentrated salt solution, the student notices the cytoplasm pulling away from the cell wall. Which process best explains this observation?",
            options: ["Diffusion", "Active transport", "Plasmolysis", "Endocytosis"],
            answer: "Plasmolysis"
        },
        {
            q: "During enzyme experiments, a student notices that increasing the temperature beyond an optimal point results in reduced enzymatic activity. Which molecular event best explains this result?",
            options: ["Increased substrate availability", "Enzyme denaturation and loss of active site shape", "Increased enzyme production", "Formation of new covalent bonds"],
            answer: "Enzyme denaturation and loss of active site shape"
        },
        {
            q: "When observing a Gram-negative bacterium under oil immersion, the cell appears pink. Which sequence of staining steps is responsible for this final color?",
            options: ["Crystal violet → safranin → alcohol → iodine", "Iodine → alcohol → crystal violet → safranin", "Crystal violet → iodine → alcohol → safranin", "Safranin → alcohol → iodine → crystal violet"],
            answer: "Crystal violet → iodine → alcohol → safranin"
        },
        {
            q: "A protist is observed with two nuclei: a large nucleus controlling metabolic functions and a small nucleus involved in reproduction. Which organism is being described?",
            options: ["Amoeba", "Euglena", "Paramecium", "Volvox"],
            answer: "Paramecium"
        },
        {
            q: "During the study of bacteria from yogurt, rod-shaped cells are observed that carry out fermentation to produce lactic acid. Which genus is most likely responsible for this process?",
            options: ["Bacillus", "Lactobacillus", "Staphylococcus", "Spirillum"],
            answer: "Lactobacillus"
        },
        {
            q: "In the diffusion experiment, molecules moved from a region of higher concentration to a region of lower concentration until equilibrium was reached. Which statement best explains why this movement occurs without the input of energy?",
            options: ["Because diffusion requires ATP", "Because random molecular motion drives passive movement", "Because enzymes are involved", "Because cell membranes actively pump molecules"],
            answer: "Because random molecular motion drives passive movement"
        },
        {
            q: "A student uses iodine on a food sample and observes a blue-black coloration. What is the most accurate interpretation of this result?",
            options: ["The sample contains reducing sugars", "The sample contains starch", "The sample contains protein", "The sample contains lipid"],
            answer: "The sample contains starch"
        },
        {
            q: "While examining fungi, a student observes club-shaped reproductive structures located on the gills of a mushroom. Which type of spores are produced by these structures?",
            options: ["Conidia", "Sporangiospores", "Basidiospores", "Zygospores"],
            answer: "Basidiospores"
        },
        {
            q: "During a Biuret test, a solution turns violet when albumin is added. What feature of albumin causes this color change?",
            options: ["Presence of fatty acids", "Presence of carbohydrate groups", "Presence of peptide bonds", "Presence of nucleic acids"],
            answer: "Presence of peptide bonds"
        },
        {
            q: "A protist that forms spherical colonies and shows division of labor between somatic and reproductive cells is most likely:",
            options: ["Euglena", "Paramecium", "Amoeba", "Volvox"],
            answer: "Volvox"
        },
        {
            q: "A bacterial cell that appears pink after Gram staining is best described as having which cell wall structure?",
            options: ["Thick peptidoglycan without outer membrane", "No cell wall", "Thin peptidoglycan with outer lipid membrane", "Cellulose wall"],
            answer: "Thin peptidoglycan with outer lipid membrane"
        },
        {
            q: "During DNA extraction, why is the solution gently handled rather than shaken vigorously after adding alcohol?",
            options: ["To reduce evaporation", "To cool the solution", "To prevent breaking long DNA strands", "To speed up precipitation"],
            answer: "To prevent breaking long DNA strands"
        },
        {
            q: "While observing Paramecium under the microscope, a student notices regular rhythmic contractions of a star-shaped structure near the cell membrane. What is the main physiological role of this structure in freshwater protists?",
            options: ["Digestion of food particles", "Removal of metabolic waste", "Regulation of water balance by expelling excess water", "Production of reproductive cells"],
            answer: "Regulation of water balance by expelling excess water"
        },
        {
            q: "A student compares skeletal, smooth, and cardiac muscle tissues. Which feature is unique to cardiac muscle cells and helps in synchronized contraction of the tissue?",
            options: ["Presence of multiple nuclei", "Absence of striations", "Presence of intercalated discs", "Spindle-shaped cell structure"],
            answer: "Presence of intercalated discs"
        },
        {
            q: "While studying fungi, a student observes brush-like structures producing dry, powdery spores that are not enclosed in sacs. Which organism and spore type are being observed?",
            options: ["Rhizopus producing sporangiospores", "Penicillium producing conidia", "Yeast producing bud scars", "Mushroom producing basidiospores"],
            answer: "Penicillium producing conidia"
        },
        {
            q: "In the bacterial lab, a slide shows spherical bacteria grouped in irregular, grape-like clusters. Which bacterial arrangement does this most accurately represent?",
            options: ["Streptococci", "Diplococci", "Staphylococci", "Tetrads"],
            answer: "Staphylococci"
        },
        {
            q: "During a plasmolysis experiment, plant cells were transferred from distilled water to a concentrated salt solution. What is the change in water movement across the cell membrane ?",
            options: ["Water will move into the cell by osmosis", "Water will move out of the cell by osmosis", "Salt entered the cell", "Active transport increased"],
            answer: "Water will move out of the cell by osmosis"
        },
        {
            q: "When preparing a slide of cheek epithelial cells, methylene blue was added. What is the primary reason this stain improves visualization of the cells?",
            options: ["It dissolves the cell membrane", "It increases the size of the nucleus", "It adds contrast by staining the nucleus and cytoplasm", "It kills bacteria present on the slide"],
            answer: "It adds contrast by staining the nucleus and cytoplasm"
        },
        {
            q: "During observation of a fungal bread mold, a student sees root-like structures embedded in the bread and upright stalks ending in round spore sacs. Which structures are responsible for anchorage and absorption?",
            options: ["Sporangiophores", "Sporangia", "Hyphae", "Rhizoids"],
            answer: "Rhizoids"
        },
        {
            q: "In a carbohydrate analysis, a student performs Molisch test and sees the formation of a purple ring at the interface of two layers. What does this observation indicate about the chemical composition of the sample?",
            options: ["Presence of lipids", "Presence of amino acids", "Presence of carbohydrates", "Presence of nucleic acids"],
            answer: "Presence of carbohydrates"
        },
        {
            q: "During Gram staining, some bacteria appear pink due to excessive exposure to alcohol during the decolorization step. What type of error is most likely occurring in this situation?",
            options: ["Under-staining", "Over-decolorization causing false Gram-negative results", "Improper heat fixing", "Lack of iodine treatment"],
            answer: "Over-decolorization causing false Gram-negative results"
        },
        {
            q: "During an enzyme activity lab, a student finds that enzyme function declines sharply at extremely acidic pH. What is the most likely molecular reason for this loss of activity?",
            options: ["Increase in substrate concentration", "Damage to the enzyme’s structure", "Increased ATP production", "More frequent enzyme–substrate collisions"],
            answer: "Damage to the enzyme’s structure"
        },
        {
            q: "In a yogurt bacteria experiment, the bacterial metabolism results in the lowering of pH in the milk. Which metabolic product is responsible for this change?",
            options: ["Carbon dioxide", "Ethanol", "Lactic acid", "Oxygen"],
            answer: "Lactic acid"
        },
        {
            q: "During DNA extraction, a student gently spools thread-like material from the top of the alcohol layer using a glass rod. What property of DNA allows it to be collected in this visible form?",
            options: ["High solubility in water", "Insolubility in cold alcohol", "Ability to evaporate", "Magnetic attraction"],
            answer: "Insolubility in cold alcohol"
        },
        {
            q: "A student tests an unknown solution with Sudan III and observes an orange-red coloration. What macromolecule group is most likely present in the sample?",
            options: ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids"],
            answer: "Lipids"
        },
        {
            q: "During microscopic analysis, a student notices that oil immersion greatly improves image clarity at high magnification. Why does immersion oil improve resolution?",
            options: ["By increasing the weight of the coverslip", "By cooling the slide", "By reducing the loss of light due to refraction", "By staining the specimen"],
            answer: "By reducing the loss of light due to refraction"
        },
        {
            q: "In the fungal classification experiment, a student observes sexual reproductive spores formed inside sac-like structures. Which fungal group is being examined?",
            options: ["Zygomycetes", "Ascomycetes", "Basidiomycetes", "Deuteromycetes"],
            answer: "Ascomycetes"
        },
        {
            q: "When examining a bacterial smear, a student sees spiral-shaped organisms that show corkscrew-like motility. To which bacterial morphological group do these organisms belong?",
            options: ["Cocci", "Bacilli", "Spirilla", "Vibrio"],
            answer: "Spirilla"
        },
        {
            q: "In a diffusion/osmosis experiment, equilibrium is reached when:",
            options: ["Molecules stop moving", "Molecules are evenly distributed with no net movement", "Temperature becomes zero", "The membrane breaks"],
            answer: "Molecules are evenly distributed with no net movement"
        },
        {
            q: "Which reagent is used specifically to test for the presence of peptide bonds in proteins?",
            options: ["Iodine solution", "Benedict's reagent", "Biuret reagent", "Sudan III"],
            answer: "Biuret reagent"
        },
        {
            q: "The movement of water from a lower solute concentration to a higher solute concentration across a semi-permeable membrane is defined as:",
            options: ["Active transport", "Diffusion", "Osmosis", "Facilitated diffusion"],
            answer: "Osmosis"
        },
        {
            q: "What is the primary function of the contractile vacuole in a freshwater protozoan like Amoeba or Paramecium?",
            options: ["To aid in digestion", "To remove metabolic waste", "To expel excess water for osmoregulation", "To generate energy"],
            answer: "To expel excess water for osmoregulation"
        },
        {
            q: "Which type of bacterial arrangement describes two spherical cells joined together?",
            options: ["Staphylococci", "Streptococci", "Diplococci", "Tetrads"],
            answer: "Diplococci"
        },
        {
            q: "What is the dense, complex structure unique to Gram-positive bacteria that retains the primary stain?",
            options: ["Outer membrane", "Capsule", "Thick peptidoglycan layer", "Lipopolysaccharide (LPS) layer"],
            answer: "Thick peptidoglycan layer"
        },
        {
            q: "In a leaf cell placed in pure water, what prevents the cell from bursting?",
            options: ["The cell membrane", "The nucleus", "The rigid cell wall", "The cytoplasm"],
            answer: "The rigid cell wall"
        }
    ],
    tf: [
        {
            q: "During Gram staining, Gram-positive bacteria appear purple because their thick peptidoglycan cell wall retains the crystal violet–iodine complex after alcohol treatment.",
            answer: "true"
        },
        {
            q: "A bacterial cell that loses crystal violet during the decolorization step and later takes up safranin will appear purple under the microscope.",
            answer: "false"
        },
        {
            q: "Yeast cells reproduce mainly by binary fission, similar to bacterial cells.",
            answer: "false"
        },
        {
            q: "The contractile vacuole in freshwater protists such as Paramecium functions to remove excess water and maintain osmotic balance.",
            answer: "true"
        },
        {
            q: "During DNA extraction, detergent is added to break down the phospholipid membranes of the cell and nucleus.",
            answer: "true"
        },
        {
            q: "Cold alcohol is added during DNA extraction to dissolve the DNA completely in the solution.",
            answer: "false"
        },
        {
            q: "Benedict’s test turning orange or brown indicates the presence of reducing sugars in a sample.",
            answer: "true"
        },
        {
            q: "Plasmolysis occurs in plant cells when they are placed in a hypotonic solution.",
            answer: "false"
        },
        {
            q: "Rhizopus fungi have coenocytic (non-septate) hyphae that contain multiple nuclei within continuous cytoplasm.",
            answer: "true"
        },
        {
            q: "Basidiospores are produced on the gills of mushrooms during sexual reproduction.",
            answer: "true"
        },
        {
            q: "A blue-black color after adding iodine solution to a sample indicates the presence of starch.",
            answer: "true"
        },
        {
            q: "The Biuret test detects lipids by producing an orange-red color change.",
            answer: "false"
        },
        {
            q: "A strong violet color in the Biuret test indicates the presence of peptide bonds in proteins.",
            answer: "true"
        },
        {
            q: "In diffusion, molecules move from an area of higher concentration to an area of lower concentration without the use of cellular energy.",
            answer: "true"
        },
        {
            q: "Gram-negative bacteria have a thick peptidoglycan layer and no outer membrane.",
            answer: "false"
        },
        {
            q: "Oil immersion improves microscope resolution by reducing light refraction between the glass slide and the objective lens.",
            answer: "true"
        },
        {
            q: "The macronucleus of Paramecium is mainly involved in sexual reproduction.",
            answer: "false"
        },
        {
            q: "Lichens are symbiotic associations between fungi and algae or cyanobacteria.",
            answer: "true"
        },
        {
            q: "Staphylococci are bacteria arranged in long chains like a necklace.",
            answer: "false"
        },
        {
            q: "Streptococci are bacteria that characteristically occur in chains.",
            answer: "true"
        },
        {
            q: "During enzyme experiments, extremely high temperatures can denature enzymes by altering their three-dimensional structure.",
            answer: "true"
        },
        {
            q: "A positive Sudan III test producing an orange-red color indicates the presence of carbohydrates.",
            answer: "false"
        },
        {
            q: "The oral groove of Paramecium functions in the intake of food particles.",
            answer: "true"
        },
        {
            q: "In a hypertonic solution, water moves out of a plant cell, causing the cell membrane to pull away from the cell wall.",
            answer: "true"
        },
        {
            q: "The eyespot in Euglena helps the organism detect light and move toward it.",
            answer: "true"
        },
        {
            q: "Glycine gives a positive Biuret test because it contains many peptide bonds.",
            answer: "false"
        },
        {
            q: "A bacterial smear that is too thick can lead to incorrect Gram staining results.",
            answer: "true"
        },
        {
            q: "During osmosis, water moves through a semi-permeable membrane from a region of lower solute concentration to higher solute concentration.",
            answer: "true"
        },
        {
            q: "Basidiomycetes mainly reproduce asexually using conidia.",
            answer: "false"
        },
        {
            q: "The spirilla group of bacteria are spherical in shape.",
            answer: "false"
        },
        {
            q: "Contractile vacuoles remove excess carbon dioxide from protist cells.",
            answer: "false"
        },
        {
            q: "During plasmolysis, vacuoles shrink as water leaves the plant cell.",
            answer: "true"
        },
        {
            q: "Enzyme activity always increases as temperature increases, without any decrease at high temperatures.",
            answer: "false"
        },
        {
            q: "The orange-red color produced by the Sudan III test is an indicator for the presence of nucleic acids.",
            answer: "false"
        },
        {
            q: "Microscopic magnification alone determines the clarity (resolution) of an image.",
            answer: "false"
        }
    ],
    fill: [
        {
            q: "The bacterial cell wall component that allows Gram-positive bacteria to retain crystal violet is called ____________.",
            answer: "Peptidoglycan"
        },
        {
            q: "The chemical that acts as a mordant in Gram staining by forming a complex with crystal violet is ____________.",
            answer: "Iodine"
        },
        {
            q: "The decolorizing agent used in Gram staining is ____________.",
            answer: "Alcohol"
        },
        {
            q: "The rod-shaped bacterial form is known as ____________.",
            answer: "Bacillus"
        },
        {
            q: "Cocci arranged in grape-like clusters are called ____________.",
            answer: "Staphylococci"
        },
        {
            q: "The protist that moves using cilia and has both macro- and micronuclei is ____________.",
            answer: "Paramecium"
        },
        {
            q: "The structure in Paramecium that expels excess water is the ____________.",
            answer: "Contractile vacuole"
        },
        {
            q: "The pigment-containing organelle that allows Euglena to perform photosynthesis is the ____________.",
            answer: "Chloroplast"
        },
        {
            q: "The light-detecting structure in Euglena is called the ____________.",
            answer: "Eyespot"
        },
        {
            q: "Amoeba moves by extending temporary cytoplasmic projections known as ____________.",
            answer: "Pseudopodia"
        },
        {
            q: "The fungal cell wall is primarily composed of ____________.",
            answer: "Chitin"
        },
        {
            q: "The root-like structures in bread mold that help in absorption are called ____________.",
            answer: "Rhizoids"
        },
        {
            q: "The asexual spores of Penicillium are known as ____________.",
            answer: "Conidia"
        },
        {
            q: "The spore-producing sac found in Rhizopus is called the ____________.",
            answer: "Sporangium"
        },
        {
            q: "The network of hyphae forming the body of a fungus is called the ____________.",
            answer: "Mycelium"
        },
        {
            q: "The reagent used to test for general carbohydrates is ____________ test.",
            answer: "Molisch"
        },
        {
            q: "Benedict’s test gives an orange-red precipitate in the presence of ____________ sugars.",
            answer: "Reducing"
        },
        {
            q: "The reagent that produces a blue-black color in the presence of starch is ____________.",
            answer: "Iodine"
        },
        {
            q: "The test that detects pentose sugars using orcinol reagent is the ____________ test.",
            answer: "Bial's"
        },
        {
            q: "The test that detects peptide bonds in proteins is the ____________ test.",
            answer: "Biuret"
        },
        {
            q: "Sudan III is a stain used to detect the presence of ____________.",
            answer: "Lipids"
        },
        {
            q: "During DNA extraction, detergent helps break down the ____________ and nuclear membranes.",
            answer: "Cell"
        },
        {
            q: "The enzyme used to digest proteins surrounding DNA is ____________.",
            answer: "Protease"
        },
        {
            q: "Cold alcohol is added during DNA extraction to help DNA ____________.",
            answer: "Precipitate"
        },
        {
            q: "The visible DNA extracted in the lab usually appears as ____________ filaments.",
            answer: "White"
        },
        {
            q: "The movement of molecules from high concentration to low concentration is called ____________.",
            answer: "Diffusion"
        },
        {
            q: "The loss of water from a plant cell in a hypertonic solution results in ____________.",
            answer: "Plasmolysis"
        },
        {
            q: "The enzyme that breaks down starch into sugars is ____________.",
            answer: "Amylase"
        },
        {
            q: "The bacterial arrangement forming long chains is called ____________.",
            answer: "Streptococci"
        },
        {
            q: "The pink counterstain used in Gram staining is ____________.",
            answer: "Safranin"
        },
        {
            q: "The microscope lens that provides the highest magnification is the ____________ objective lens.",
            answer: "Oil immersion"
        },
        {
            q: "The symbiotic relationship between fungi and algae is called a ____________.",
            answer: "Lichen"
        },
        {
            q: "The orange-red color in Sudan III test indicates the presence of ____________.",
            answer: "Lipids"
        },
        {
            q: "The movement of water across a semi-permeable membrane is called ____________.",
            answer: "Osmosis"
        }
    ]
};
