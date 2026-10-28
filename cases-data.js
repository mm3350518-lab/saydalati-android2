
window.ILMO_CASES = [];

const topics = [
  ["Cardiovascular", "القلب والأوعية الدموية", [
    "Hypertension", "Heart failure", "Angina", "Myocardial infarction",
    "Atrial fibrillation", "Hyperlipidemia", "ACE inhibitor adverse effects",
    "Anticoagulant safety", "Peripheral edema", "Orthostatic hypotension"
  ]],
  ["Respiratory", "الجهاز التنفسي", [
    "Asthma", "COPD", "Pneumonia", "Acute cough", "Allergic rhinitis",
    "Inhaler technique", "Inhaled corticosteroids", "Bronchodilator safety",
    "Shortness of breath", "Smoking cessation"
  ]],
  ["Gastrointestinal", "الجهاز الهضمي والكبد", [
    "GERD", "Peptic ulcer", "Gastrointestinal bleeding", "Constipation",
    "Diarrhea", "Nausea and vomiting", "Hepatitis", "Cirrhosis",
    "Inflammatory bowel disease", "Drug-induced liver injury"
  ]],
  ["Renal", "الكلى والمسالك البولية", [
    "Chronic kidney disease", "Acute kidney injury", "UTI",
    "Pyelonephritis", "Kidney stones", "Electrolyte imbalance",
    "Renal dose adjustment", "Nephrotoxic medicines",
    "Urinary retention", "Hematuria"
  ]],
  ["Endocrine", "الغدد والسكري", [
    "Type 1 diabetes", "Type 2 diabetes", "Hypoglycemia",
    "Diabetic ketoacidosis", "Hyperglycemia", "Hypothyroidism",
    "Hyperthyroidism", "Adrenal insufficiency", "Osteoporosis",
    "Insulin administration"
  ]],
  ["Neurology", "الجهاز العصبي", [
    "Ischemic stroke", "Epilepsy", "Migraine", "Parkinson disease",
    "Peripheral neuropathy", "Dementia", "Multiple sclerosis",
    "Neuropathic pain", "Seizure medicine safety", "Acute confusion"
  ]],
  ["Infectious Diseases", "الأمراض المعدية والمضادات", [
    "Antibiotic stewardship", "Community-acquired pneumonia",
    "Cellulitis", "Sepsis warning signs", "Antibiotic allergy",
    "Antibiotic-associated diarrhea", "Tuberculosis",
    "Urinary infection", "Antimicrobial resistance", "Vaccination"
  ]],
  ["Hematology", "أمراض الدم", [
    "Iron deficiency anemia", "Vitamin B12 deficiency",
    "Warfarin monitoring", "Bleeding risk", "Thrombocytopenia",
    "Deep vein thrombosis", "Pulmonary embolism", "Sickle cell disease",
    "Neutropenia", "Antiplatelet safety"
  ]],
  ["Rheumatology", "الروماتيزم والمناعة", [
    "Rheumatoid arthritis", "Osteoarthritis", "Gout",
    "Systemic lupus erythematosus", "Methotrexate safety",
    "Corticosteroid adverse effects", "Immunosuppressant monitoring",
    "Biologic medicine screening", "Acute joint inflammation",
    "Autoimmune disease flare"
  ]],
  ["Dermatology", "الجلدية والحساسية", [
    "Atopic dermatitis", "Psoriasis", "Acne", "Urticaria",
    "Anaphylaxis", "Contact dermatitis", "Fungal skin infection",
    "Scabies", "Severe drug rash", "Topical corticosteroid safety"
  ]],
  ["Ophthalmology", "طب العيون", [
    "Glaucoma", "Conjunctivitis", "Dry eye", "Eye drop technique",
    "Diabetic retinopathy", "Acute eye pain", "Cataract",
    "Ocular allergy", "Contact lens infection risk", "Sudden vision loss"
  ]],
  ["ENT", "الأنف والأذن والحنجرة", [
    "Otitis media", "Otitis externa", "Sinusitis", "Sore throat",
    "Vertigo", "Tinnitus", "Epistaxis", "Nasal congestion",
    "Hearing loss", "Decongestant safety"
  ]],
  ["Women's Health", "صحة المرأة والحمل", [
    "Pregnancy medicine review", "Iron deficiency in pregnancy",
    "Morning sickness", "Gestational diabetes", "Contraception",
    "Emergency contraception", "Menopause symptoms",
    "Breastfeeding medicine safety", "Preeclampsia warning signs",
    "Folic acid supplementation"
  ]],
  ["Pediatrics", "طب الأطفال", [
    "Pediatric fever", "Child dehydration", "Pediatric asthma",
    "Weight-based dosing", "Otitis media in children",
    "Pediatric antibiotic safety", "Oral rehydration",
    "Medication measuring devices", "Febrile seizure",
    "Accidental ingestion"
  ]],
  ["Geriatrics", "كبار السن وتعدد الأدوية", [
    "Polypharmacy", "Fall risk", "Anticholinergic burden",
    "Medication reconciliation", "Renal impairment in older adults",
    "Orthostatic hypotension", "Adherence difficulties",
    "Sedative medicine safety", "Confusion from medicines",
    "Deprescribing review"
  ]],
  ["Mental Health", "الصحة النفسية", [
    "Major depression", "Anxiety disorder", "Bipolar disorder",
    "Schizophrenia", "SSRI adverse effects", "Serotonin syndrome",
    "Lithium monitoring", "Antipsychotic metabolic effects",
    "Benzodiazepine safety", "Suicide risk recognition"
  ]],
  ["Emergency", "الطوارئ والسموم", [
    "Anaphylaxis", "Opioid overdose", "Paracetamol overdose",
    "Poisoning assessment", "Severe hypoglycemia", "Heat illness",
    "Severe dehydration", "Acute chest pain", "Stroke recognition",
    "Medication overdose"
  ]],
  ["Pain", "الألم والعضلات والمفاصل", [
    "Acute musculoskeletal pain", "Chronic back pain",
    "NSAID safety", "Opioid risk assessment", "Osteoarthritis pain",
    "Muscle strain", "Neuropathic pain", "Fibromyalgia",
    "Acute gout pain", "Pain medicine interactions"
  ]],
  ["Nutrition", "التغذية والشوارد", [
    "Iron deficiency", "Vitamin D deficiency", "Vitamin B12 deficiency",
    "Hypokalemia", "Hyperkalemia", "Hyponatremia",
    "Hypernatremia", "Malnutrition", "Refeeding syndrome",
    "Supplement interaction"
  ]],
  ["Clinical Pharmacy", "الصيدلة السريرية وسلامة الدواء", [
    "Medication reconciliation", "Drug interactions",
    "Adverse drug reaction", "High-alert medicines",
    "Medication adherence", "Therapeutic drug monitoring",
    "Dose calculation verification", "Look-alike medicines",
    "Medication error prevention", "Patient counselling"
  ]]
];

const levels = [
  {
    key: "beginner",
    name: "Beginner",
    ar: "مبتدئ",
    focus: "identify the main safety issue and the appropriate first step"
  },
  {
    key: "intermediate",
    name: "Intermediate",
    ar: "متوسط",
    focus: "assess risk factors, current medicines, monitoring and referral needs"
  },
  {
    key: "advanced",
    name: "Advanced",
    ar: "متقدم",
    focus: "integrate clinical assessment, contraindications, interactions and monitoring"
  }
];

topics.forEach(([system, systemAr, list]) => {
  list.forEach(topic => {
    levels.forEach(level => {
      const id = window.ILMO_CASES.length + 1;

      window.ILMO_CASES.push({
        id,
        system,
        systemAr,
        level: level.key,
        levelName: level.ar,
        title: topic + " — " + level.name,
        text:
          "Clinical pharmacy case: A patient presents with " + topic +
          ". As the pharmacist, what is the safest next step? Your task: " +
          level.focus + ". Review the patient's history, allergies, current medicines, " +
          "relevant observations and any red flags before making a recommendation.",
        options: [
          "Recommend a new medicine or change the dose without further assessment.",
          "Ignore potential warning signs and delay evaluation.",
          "Assess the patient, verify relevant clinical information and medicines, " +
          "and arrange urgent referral when red flags are present."
        ],
        answer: 2,
        explanation:
          "General safety principle: assess the patient and medication history, " +
          "check allergies, contraindications, interactions and monitoring needs. " +
          "Do not make a patient-specific treatment decision from this template alone. " +
          "Use current clinical guidelines and refer urgent symptoms appropriately.",
        sourceTitle: "MedlinePlus — Health Information",
        sourceUrl: "https://medlineplus.gov/",
        educationalTemplate: true
      });
    });
  });
});

console.log("ILMO Health cases:", window.ILMO_CASES.length);
