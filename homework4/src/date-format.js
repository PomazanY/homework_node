import { DateTime } from "luxon";

const now = DateTime.now()
console.log(now.toFormat("dd-mm-yyyy"));
console.log(now.toFormat("mm dd yy"));
console.log(now.toFormat("dd"));