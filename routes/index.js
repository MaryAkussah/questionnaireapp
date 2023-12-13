const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.get("/", (req, res) => {
    res.render("./index.ejs");
});

router.post("/submit-response", async (req, res) => {
    console.table(req.body);
    try {
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

        const createdResponseSectionOneData = await prisma.responseSectionOne.create({
            data: responseSectionOneData,
        });

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

    } catch (error) {
        console.log(`Try catch error====>>> ${error}`)
    }
});

router.get('/thank-you', (req, res) => {
    res.render('./thank-you.ejs')
})

module.exports = router;

