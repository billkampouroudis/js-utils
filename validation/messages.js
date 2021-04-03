const formMessages = {
  el: {
    required: 'Αυτό το πεδίο είναι υποχρεωτικό',
    fullName: 'Το ονοματεπώνυμο δεν είναι σωστό',
    maxLength: (length) =>
      `Αυτό το πεδίο πρέπει να περιέχει λιγότερους από ${length} χαρακτήρες`,
    minLength: (length) =>
      `Αυτό το πεδίο πρέπει να περιέχει τουλάχιστον ${length} χαρακτήρες`,
    email: 'Εισάγετε μία σωστή διεύθυνση email',
    phone: 'Εισάγετε ένα σωστό αριθμό τηλεφώνου',
    fileTooLarge: (sizeString) =>
      `Το αρχείο δεν πρέπει να ξεπερνά τα ${sizeString}`,
    fileType: 'Αυτός το τύπος αρχείου δεν υποστηρίζεται',
    generalError: 'Σφάλμα κατά την αποστολή της φόρμας',
    success: 'Η φόρμα στάλθηκε με επιτυχία',
    password: {
      length: (length) =>
        `Ο κωδικός πρέπει να περιέχει τουλάχιστον ${length} χαρακτήρες`
    },
    numeric: 'Εισάγετε έναν αριθμό'
  }
};

export default formMessages;
