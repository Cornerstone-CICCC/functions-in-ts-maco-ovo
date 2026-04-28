// Use the `typeof` operator to create a function that dynamically determines the type of the argument and logs it.
// Return a string;

const logType = (log: any): string => {
	// an array ?
	if (Array.isArray(log)) {
		if (log.length === 0) {
			return `The type of the argument is: empty array`;
		}

    // All same type
		const firstType = typeof log[0];
		const allSameType = log.every((item) => typeof item === firstType);

		if (allSameType) {
			if (firstType === "number") {
				return `The type of the argument is: array of number`;
			} else if (firstType === "string") {
				return `The type of the argument is: array of string`;
			} else if (firstType === "boolean") {
				return `The type of the argument is: array of boolean`;
			}
		}

		// Mixed 
		return `The type of the argument is: array`;
	}

	// non-array
	const type = typeof log;
	return `The type of the argument is: ${type}`;
};

// Test cases:
console.log(logType(5)); // Expected output: "The type of the argument is: number"
console.log(logType("hello")); // Expected output: "The type of the argument is: string"
console.log(logType(true)); // Expected output: "The type of the argument is: boolean"
console.log(logType({})); // Expected output: "The type of the argument is: object"
console.log(logType(null)); // Expected output: "The type of the argument is: object"
console.log(logType([])); // Expected output: "The type of the argument is: empty array"
console.log(logType([1, 2, 3])); // Expected output: "The type of the argument is: array of number"
console.log(logType(["hello", "world"])); // Expected output: "The type of the argument is: array of string"
console.log(logType([1, "two", true])); // Expected output: "The type of the argument is: array"

export default logType;
