const allQuizData = {
    1: [
        { q: 'A _ _ L E', ans: 'P', opts: ['P', 'B', 'T', 'N'], hint: 'A fruit that keeps the doctor away' },
        { q: 'B _ N _ N A', ans: 'A', opts: ['A', 'E', 'I', 'O'], hint: 'Yellow fruit monkeys love' },
        { q: 'C _ T', ans: 'A', opts: ['A', 'E', 'I', 'O'], hint: 'Pet that says meow' },
        { q: 'D _ G', ans: 'O', opts: ['O', 'A', 'E', 'I'], hint: 'Pet that barks' },
        { q: 'E L E _ H A N T', ans: 'P', opts: ['P', 'F', 'V', 'B'], hint: 'Largest land animal' },
        { q: 'F _ S H', ans: 'I', opts: ['I', 'A', 'E', 'O'], hint: 'Lives in water' },
        { q: 'G O _ T', ans: 'A', opts: ['A', 'E', 'I', 'O'], hint: 'Farm animal with horns' },
        { q: 'H _ T', ans: 'A', opts: ['A', 'E', 'I', 'O'], hint: 'Wear on your head' },
        { q: 'I C _', ans: 'E', opts: ['E', 'A', 'I', 'O'], hint: 'Frozen water' },
        { q: 'J U I _ E', ans: 'C', opts: ['C', 'K', 'S', 'X'], hint: 'Drink from fruits' }
    ],
    2: [
        { q: 'What comes after 5?', ans: '6', opts: ['6', '7', '4', '8'], hint: 'Count on fingers' },
        { q: '2 + 2 = ?', ans: '4', opts: ['4', '3', '5', '6'], hint: 'Two pairs' },
        { q: 'Days in a week?', ans: '7', opts: ['7', '6', '8', '5'], hint: 'Monday to Sunday' },
        { q: '10 - 5 = ?', ans: '5', opts: ['5', '4', '6', '3'], hint: 'Half of 10' },
        { q: 'First number?', ans: '1', opts: ['1', '0', '2', '3'], hint: 'The beginning' },
        { q: '3 × 3 = ?', ans: '9', opts: ['9', '6', '12', '8'], hint: 'Three threes' },
        { q: 'Fingers on one hand?', ans: '5', opts: ['5', '4', '6', '10'], hint: 'Look at hand' },
        { q: '8 + 2 = ?', ans: '10', opts: ['10', '9', '11', '6'], hint: 'Perfect ten' },
        { q: 'Half of 20?', ans: '10', opts: ['10', '5', '15', '8'], hint: 'Two equal parts' },
        { q: '1 + 1 = ?', ans: '2', opts: ['2', '1', '3', '0'], hint: 'Simplest sum' }
    ],
    3: [
        { q: 'Color of sky?', ans: 'Blue', opts: ['Blue', 'Red', 'Green', 'Yellow'], hint: 'Look up' },
        { q: 'Color of grass?', ans: 'Green', opts: ['Green', 'Blue', 'Red', 'Brown'], hint: 'Nature color' },
        { q: 'Color of sun?', ans: 'Yellow', opts: ['Yellow', 'Orange', 'Red', 'White'], hint: 'Bright and warm' },
        { q: 'Color of blood?', ans: 'Red', opts: ['Red', 'Blue', 'Green', 'Purple'], hint: 'Stop sign' },
        { q: 'Mix red + blue?', ans: 'Purple', opts: ['Purple', 'Green', 'Orange', 'Brown'], hint: 'Royal color' },
        { q: 'Color of snow?', ans: 'White', opts: ['White', 'Blue', 'Gray', 'Silver'], hint: 'Pure and clean' },
        { q: 'Color of night?', ans: 'Black', opts: ['Black', 'Blue', 'Gray', 'Purple'], hint: 'Darkest color' },
        { q: 'Mix yellow + blue?', ans: 'Green', opts: ['Green', 'Orange', 'Purple', 'Brown'], hint: 'Grass color' },
        { q: 'Color of orange?', ans: 'Orange', opts: ['Orange', 'Yellow', 'Red', 'Brown'], hint: 'Same as fruit' },
        { q: 'Color of clouds?', ans: 'White', opts: ['White', 'Gray', 'Blue', 'Black'], hint: 'Fluffy and light' }
    ]
};

// Generate remaining 47 quizzes
for (let i = 4; i <= 50; i++) {
    allQuizData[i] = [
        { q: `Quiz ${i} - Question 1?`, ans: 'A', opts: ['A', 'B', 'C', 'D'], hint: 'First option is correct' },
        { q: `Quiz ${i} - Question 2?`, ans: 'B', opts: ['A', 'B', 'C', 'D'], hint: 'Second option is correct' },
        { q: `Quiz ${i} - Question 3?`, ans: 'C', opts: ['A', 'B', 'C', 'D'], hint: 'Third option is correct' },
        { q: `Quiz ${i} - Question 4?`, ans: 'D', opts: ['A', 'B', 'C', 'D'], hint: 'Fourth option is correct' },
        { q: `Quiz ${i} - Question 5?`, ans: 'A', opts: ['A', 'B', 'C', 'D'], hint: 'First option is correct' },
        { q: `Quiz ${i} - Question 6?`, ans: 'B', opts: ['A', 'B', 'C', 'D'], hint: 'Second option is correct' },
        { q: `Quiz ${i} - Question 7?`, ans: 'C', opts: ['A', 'B', 'C', 'D'], hint: 'Third option is correct' },
        { q: `Quiz ${i} - Question 8?`, ans: 'D', opts: ['A', 'B', 'C', 'D'], hint: 'Fourth option is correct' },
        { q: `Quiz ${i} - Question 9?`, ans: 'A', opts: ['A', 'B', 'C', 'D'], hint: 'First option is correct' },
        { q: `Quiz ${i} - Question 10?`, ans: 'B', opts: ['A', 'B', 'C', 'D'], hint: 'Second option is correct' }
    ];
}