+--------------------+
| Frontend (UI/UX)   |
| /book-appointment  |
| /profile/:id       |
| /messages          |
+--------------------+
          ↓
+--------------------+
| Middleware         |
| /api/messages/send |
| /api/appointments  |
| /api/users/auth    |
+--------------------+
          ↓
+--------------------+
| Backend            |
| /api/users         |
| /api/appointments  |
| /api/reviews       |
+--------------------+
          ↓
+--------------------+
| Banco de Dados     |
| users              |
| appointments       |
| messages           |
+--------------------+
