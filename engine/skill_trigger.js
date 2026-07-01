class SkillTrigger {

    trigger(character, context) {

        const skills = character?.abilities || [];

        for (const skill of skills) {

            if (this.canActivate(skill, context)) {

                return {

                    action: "use_skill",

                    skill,

                    character: character.id

                };

            }

        }

        return null;

    }

    canActivate(skill, context) {

        if (!skill.conditions) {

            return true;

        }

        return skill.conditions.every(condition =>

            context[condition.key] === condition.value

        );

    }

}

const SKILL_TRIGGER = new SkillTrigger();
