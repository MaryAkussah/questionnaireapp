const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const QUESTIONS = {
    revenue_sources: "Question 1",
    diversification: "Question 2",
    financial_strategy: "Question 3",
    budget_management: "Question 4",
    financial_reporting: "Question 5",
    grant_acquisition: "Question 6",
    investor_attraction: "Question 7",
    reserves_and_continuity: "Question 8",
    sustainability_plan: "Question 9",
    clear_vision_and_mission: "Question 10",
    defined_strategic_goals: "Question 11",
    alignment_with_market_trends: "Question 12",
    innovation_driven_strategy: "Question 13",
    implementation_plan_and_execution: "Question 14",
    resource_allocation: "Question 15",
    monitoring_and_control_mechanisms: "Question 16",
    responsiveness_to_changes: "Question 17",
    regular_review_and_update_of_strategy: "Question 18",
    performance_against_strategic_goals: "Question 19",
    use_of_feedback_in_strategic_revision: "Question 20",
    stakeholder_identification: "Question 21",
    stakeholder_engagement_in_strategy: "Question 22",
    responsiveness_to_stakeholder_feedback: "Question 23",
    clarity_of_leadership_roles: "Question 24",
    effectiveness_of_leadership: "Question 25",
    transparency_and_accountability_in_governance: "Question 26",
    inclusiveness_in_decisionmaking_process: "Question 27",
    staff_motivation_and_morale: "Question 28",
    staff_competence: "Question 29",
    clear_job_description_and_role_expectations: "Question 30",
    ongoing_training_and_development: "Question 31",
    efficiency_of_operations: "Question 32",
    quality_control_system: "Question 33",
    technology_use: "Question 34",
    risk_management: "Question 35",
    performance_evaluation: "Question 36",
    performance_feedback: "Question 37",
    reward_recognition: "Question 38",
    services_offered: "Question 39",
    service_relevance: "Question 40",
    service_innovativeness: "Question 41",
    service_quality: "Question 42",
    service_timeliness: "Question 43",
    service_responsiveness: "Question 44",
    service_accessibility: "Question 45",
    technology_service_delivery: "Question 46",
    service_impact: "Question 47",
    feedback_utilization: "Question 48",
    service_review: "Question 49",
    startups_supported: "Question 50",
    job_creation: "Question 51",
    revenue_growth: "Question 52",
    novel_solutions: "Question 53",
    patents_ips: "Question 54",
    rd_initiatives: "Question 55",
    local_economy_contribution: "Question 56",
    community_engagement: "Question 57",
    partnerships_collaborations: "Question 58",
    startup_sustainability: "Question 59",
    long_term_value_creation: "Question 60",
    strategic_vision: "Question 61",
    working_space: "Question 62",
    comfort_ambiance: "Question 63",
    accessibility_wheelchair: "Question 64",
    safety_equipment: "Question 65",
    internet_connection: "Question 66",
    necessary_hardware: "Question 67",
    software_tools_availability: "Question 68",
    power_reliability: "Question 69",
    security_measures: "Question 70",
    meeting_rooms: "Question 71",
    event_space: "Question 72",
    av_equipment_quality: "Question 73",
    kitchen_facilities: "Question 74",
    relaxation_recreation: "Question 75",
    cleanliness_maintenance: "Question 76",
    fulltime_staff: "Question 77",
    staff_qualifications: "Question 78",
    staff_turnover: "Question 79",
    staff_training: "Question 80",
    local_partners: "Question 81",
    local_partnership_quality: "Question 82",
    collaboration_outcome: "Question 83",
    intl_partners: "Question 84",
    intl_partners_quality: "Question 85",
    intl_collaboration_outcome: "Question 86",
    network_participation: "Question 87",
    international_network_participation: "Question 88",
    network_benefits: "Question 89",
    alumni_network: "Question 90",
    alumni_engagement: "Question 91",
    alumni_success_stories: "Question 92",
    governance_structure: "Question 93",
    roles_responsibilities: "Question 94",
    decision_making: "Question 95",
    diversity_representation: "Question 96",
    existence_clarity_policies: "Question 97",
    alignment_legal_ethical_policies: "Question 98",
    effectiveness_policies_operations: "Question 99",
    review_update_policies: "Question 100",
    compliance_legal_requirements: "Question 101",
    risk_management_strategies: "Question 102",
    risk_management_effectiveness: "Question 103",
    legal_compliance_history: "Question 104",
    stakeholder_engagement: "Question 105",
    transparency_stakeholders: "Question 106",
    responsiveness_feedback: "Question 107",
    curriculum_entrepreneurship: "Question 108",
    curriculum_comprehensiveness: "Question 109",
    curriculum_alignment: "Question 110",
    curriculum_innovation: "Question 111",
    quality_of_trainers: "Question 112",
    experiential_learning: "Question 113",
    digital_tools_platforms: "Question 114",
    learner_engagement: "Question 115",
    assessment_techniques: "Question 116",
    feedback_quality: "Question 117",
    curriculum_effectiveness: "Question 118",
    alumni_successes: "Question 119",
    industry_feedback: "Question 120"
}


router.get("/", (req, res) => {
    res.render("./index.ejs");
});

router.post("/submit-response", async (req, res) => {
    console.table(req.body);
  
        const responseMainData = {
            email_address: req.body.email_address,
            applicant_name: req.body.applicant_name,
            applicant_company_name: req.body.applicant_company_name,
            company_address: req.body.company_address,
            telephone_number: req.body.telephone_number,
        };

        const createdResponseMain = await prisma.responseMain.create({
            data: responseMainData,
        });

        const responseSectionOneData = {
            responseMainId: createdResponseMain.id,
            revenue_sources: req.body.revenue_sources,
            diversification: req.body.diversification,
            financial_strategy: req.body.financial_strategy,
            budget_management: req.body.budget_management,
            financial_reporting: req.body.financial_reporting,
            grant_acquisition: req.body.grant_acquisition,
            investor_attraction: req.body.investor_attraction,
            reserves_and_continuity: req.body.reserves_and_continuity,
            sustainability_plan: req.body.sustainability_plan,
            clear_vision_and_mission: req.body.clear_vision_and_mission,
            defined_strategic_goals: req.body.defined_strategic_goals,
            alignment_with_market_trends: req.body.alignment_with_market_trends,
            innovation_driven_strategy: req.body.innovation_driven_strategy,
            implementation_plan_and_execution: req.body.implementation_plan_and_execution,
            resource_allocation: req.body.resource_allocation,
            monitoring_and_control_mechanisms: req.body.monitoring_and_control_mechanisms,
            responsiveness_to_changes: req.body.responsiveness_to_changes,
            regular_review_and_update_of_strategy: req.body.regular_review_and_update_of_strategy,
            performance_against_strategic_goals: req.body.performance_against_strategic_goals,
            use_of_feedback_in_strategic_revision: req.body.use_of_feedback_in_strategic_revision,
            stakeholder_identification: req.body.stakeholder_identification,
            stakeholder_engagement_in_strategy: req.body.stakeholder_engagement_in_strategy,
            responsiveness_to_stakeholder_feedback: req.body.responsiveness_to_stakeholder_feedback,
            clarity_of_leadership_roles: req.body.clarity_of_leadership_roles,
            effective_of_leadership: req.body.effective_of_leadership,
            transparency_and_accountability_in_governance: req.body.transparency_and_accountability_in_governance,
            inclusiveness_in_decisionmaking_process: req.body.inclusiveness_in_decisionmaking_process,
            staff_motivation_and_morale: req.body.staff_motivation_and_morale,
            staff_competence: req.body.staff_competence,
            clear_job_description_and_role_expectatons: req.body.clear_job_description_and_role_expectatons,
            ongoing_training_and_development: req.body.ongoing_training_and_development,
            efficiency_operations: req.body.efficiency_operations,
            quality_control_system: req.body.quality_control_system,
            technology_use: req.body.technology_use,
            risk_management: req.body.risk_management,
            performance_evaluation: req.body.performance_evaluation,
            performance_feedback: req.body.performance_feedback,
            reward_recognition: req.body.reward_recognition,
            services_offered: req.body.services_offered,
            service_relevance: req.body.service_relevance,
            service_innovativeness: req.body.service_innovativeness,
            service_quality: req.body.service_quality,
            service_timeliness: req.body.service_timeliness,
            service_responsiveness: req.body.service_responsiveness,
            service_accessibility: req.body.service_accessibility,
            technology_service_delivery: req.body.technology_service_delivery,
            service_impact: req.body.service_impact,
            feedback_utilization: req.body.feedback_utilization,
            service_review: req.body.service_review,
            startups_supported: req.body.startups_supported,
            job_creation: req.body.job_creation,
            revenue_growth: req.body.revenue_growth,
            novel_solutions: req.body.novel_solutions,
            patents_ips: req.body.patents_ips,
            rd_initiatives: req.body.rd_initiatives
        }

        const nullValuesSectionOne = checkForNullValues(responseSectionOneData);
        
        const responseSectionTwoData = {
            responseMainId: createdResponseMain.id,
            local_economy_contribution: req.body.local_economy_contribution,
            community_engagement: req.body.community_engagement,
            partnerships_collaborations: req.body.partnerships_collaborations,
            startup_sustainability: req.body.startup_sustainability,
            long_term_value_creation: req.body.long_term_value_creation,
            strategic_vision: req.body.strategic_vision,
            working_space: req.body.working_space,
            comfort_ambiance: req.body.comfort_ambiance,
            accessibility_wheelchair: req.body.accessibility_wheelchair,
            safety_equipment: req.body.safety_equipment,
            internet_connection: req.body.internet_connection,
            necessary_hardware: req.body.necessary_hardware,
            software_tools_availability: req.body.software_tools_availability,
            power_reliability: req.body.power_reliability,
            security_measures: req.body.security_measures,
            meeting_rooms: req.body.meeting_rooms,
            event_space: req.body.event_space,
            av_equipment_quality: req.body.av_equipment_quality,
            kitchen_facilities: req.body.kitchen_facilities,
            relaxation_recreation: req.body.relaxation_recreation,
            cleanliness_maintenance: req.body.cleanliness_maintenance,
            fulltime_staff: req.body.fulltime_staff,
            staff_qualifications: req.body.staff_qualifications,
            staff_turnover: req.body.staff_turnover,
            staff_training: req.body.staff_training,
            local_partners: req.body.local_partners,
            local_partnership_quality: req.body.local_partnership_quality,
            collaboration_outcome: req.body.collaboration_outcome,
            intl_partners: req.body.intl_partners,
            intl_partners_quality: req.body.intl_partners_quality,
            intl_collaboration_outcome: req.body.intl_collaboration_outcome,
            network_participation: req.body.network_participation,
            international_network_participation: req.body.international_network_participation,
            network_benefits: req.body.network_benefits,
            alumni_network: req.body.alumni_network,
            alumni_engagement: req.body.alumni_engagement,
            alumni_success_stories: req.body.alumni_success_stories,
            governance_structure: req.body.governance_structure,
            roles_responsibilities: req.body.roles_responsibilities,
            decision_making: req.body.decision_making,
            diversity_representation: req.body.diversity_representation,
            existence_clarity_policies: req.body.existence_clarity_policies,
            alignment_legal_ethical_policies: req.body.alignment_legal_ethical_policies,
            effectiveness_policies_operations: req.body.effectiveness_policies_operations,
            review_update_policies: req.body.review_update_policies,
            compliance_legal_requirements: req.body.compliance_legal_requirements,
            risk_management_strategies: req.body.risk_management_strategies,
            risk_management_effectiveness: req.body.risk_management_effectiveness,
            legal_compliance_history: req.body.legal_compliance_history,
            stakeholder_engagement: req.body.stakeholder_engagement,
            transparency_stakeholders: req.body.transparency_stakeholders,
            responsiveness_feedback: req.body.responsiveness_feedback,
            curriculum_entrepreneurship: req.body.curriculum_entrepreneurship,
            curriculum_comprehensiveness: req.body.curriculum_comprehensiveness,
            curriculum_alignment: req.body.curriculum_alignment,
            curriculum_innovation: req.body.curriculum_innovation,
            quality_of_trainers: req.body.quality_of_trainers,
            experiential_learning: req.body.experiential_learning,
            digital_tools_platforms: req.body.digital_tools_platforms,
            learner_engagement: req.body.learner_engagement,
            assessment_techniques: req.body.assessment_techniques,
            feedback_quality: req.body.feedback_quality,
            curriculum_effectiveness: req.body.curriculum_effectiveness,
            alumni_successes: req.body.alumni_successes,
            industry_feedback: req.body.industry_feedback
        }

        const nullValuesSectionTwo = checkForNullValues(responseSectionTwoData);

        // Function to handle form submission and check for null values
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Check for null values in each section
    const hasNullValues = checkForNullValues();

    // If any section contains null values, prevent form submission
    if (hasNullValues) {
        alert('Please fill in all sections.'); // Display an alert or message
    } else {
        // If no null values found, submit the form
        document.getElementById('mainForm').submit();
    }
}

// Attach the handleSubmit function to the form submit event
document.getElementById('mainForm').addEventListener('submit', handleSubmit);

// Your function to check for null values
function checkForNullValues() {
    for (let i = 1; i <= 120; i++) {
        const section = document.getElementById(`section${i}`);
        if (!section || !section.textContent.trim()) {
            return true; // Return true if any section is null or empty
        }
    }
    return false; // Return false if all sections have content
}




        const createdResponseSectionOneData = await prisma.responseSectionOne.create({
                data: responseSectionOneData,
            });
        const createdResponseSectionTwoData = await prisma.responseSectionTwo.create({
                data: responseSectionTwoData,
            });
        

        // Update user
        const updateResponseMain = await prisma.responseMain.update({
            where: {
                id: createdResponseMain.id
            },
            data: {
                responseSectionOneId: createdResponseSectionOneData.id,
                responseSectionTwoId: createdResponseSectionTwoData.id
            },
        });

        res.redirect('/thank-you')

    
});

router.get('/thank-you', (req, res) => {
    res.render('./thank-you.ejs')
})

function checkForNullValues(obj) {
    const nullKeys = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === null || obj[key] === undefined) {
        nullKeys.push(key);
      }
    }
    return nullKeys;
  }


module.exports = router;

