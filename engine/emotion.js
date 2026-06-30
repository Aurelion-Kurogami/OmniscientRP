export class EmotionEngine {

    constructor() {

        this.emotions = new Map();

    }

    get(id) {

        return this.emotions.get(id) || {

            mood: "neutral",

            intensity: 0

        };

    }

    set(id, mood, intensity = 1) {

        this.emotions.set(id, {

            mood,

            intensity

        });

    }

    decay() {

        for (const [id, emotion] of this.emotions) {

            emotion.intensity = Math.max(

                0,

                emotion.intensity - 1

            );

            if (emotion.intensity === 0) {

                emotion.mood = "neutral";

            }

        }

    }

}
