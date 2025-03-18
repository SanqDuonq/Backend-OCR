declare module "node-nlp" {
    export interface NlpEntity {
        start: number;
        end: number;
        len: number;
        accuracy: number;
        sourceText: string;
        utteranceText: string;
        entity: string;
        resolution?: {
            value?: string;
        };
    }

    export interface NlpResult {
        locale: string;
        utterance: string;
        classification: { intent: string; score: number }[];
        intent: string;
        score: number;
        entities?: NlpEntity[];
        answer?: string;
    }

    export class NlpManager {
        constructor(options?: { languages: string[] });

        addDocument(language: string, utterance: string, intent: string): void;
        addAnswer(language: string, intent: string, answer: string): void;
        addNamedEntityText(
            name: string,
            option: string,
            languages: string[],
            synonyms: string[]
        ): void;

        train(): Promise<void>;
        process(language: string, utterance: string): Promise<NlpResult>;
    }
}
