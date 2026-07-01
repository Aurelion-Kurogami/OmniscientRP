export class EmotionEngine {

    constructor() {

        this.emotions = new Map();

    }

    get(id) {

        if (!this.emotions.has(id)) {

            this.emotions.set(id, {

                mood: "neutral",

                intensity: 0,

                target: null,

                reason: null

            });

        }

        return this.emotions.get(id);

    }

    set(id, mood, intensity = 1, target = null, reason = null) {

        this.emotions.set(id, {

            mood,

            intensity,

            target,

            reason

        });

    }

    decay() {

        for (const emotion of this.emotions.values()) {

            emotion.intensity = Math.max(

                0,

                emotion.intensity - 1

            );

            if (emotion.intensity === 0) {

                emotion.mood = "neutral";

                emotion.target = null;

                emotion.reason = null;

            }

        }

    }

}
