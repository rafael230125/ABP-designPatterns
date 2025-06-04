# Projeto: Sistema de Montagem de Computadores Personalizados

Este projeto foi desenvolvido como parte da disciplina de **Design Patterns**, ministrada pelo Prof.° **Mateus Martinelli Paegle**. O objetivo é aplicar padrões de projeto para resolver um problema real de forma modular, escalável e reutilizável.

## 💡 Descrição

O sistema permite a montagem de computadores personalizados, onde o usuário escolhe peças de hardware (como CPU, RAM, Armazenamento, etc.) conforme suas preferências. Para garantir que a configuração final seja válida e funcional, utilizamos os seguintes padrões para validar cada etapa da montagem:

Comportamental - Chain of Responsability

Criacionais - Abstract Factory e Builder

Estrutural - Composite

Cada validador verifica se um componente essencial foi definido corretamente. Caso falte alguma peça obrigatória (ex: fonte de alimentação ou gabinete), o sistema reporta os erros de forma clara.

## 🛠️ Problema em questão 

Na vida real, ao montar um computador personalizado, o usuário pode escolher diferentes combinações de peças — como CPU, memória RAM, armazenamento, fonte, gabinete, etc. No entanto, nem toda combinação é válida. Por exemplo:

Não adianta escolher uma CPU sem definir uma fonte de energia compatível.

Um computador sem memória RAM ou sem armazenamento mínimo não funcionará.

Sem gabinete, não há estrutura física para montar o PC.

O grande desafio é garantir que o usuário tenha liberdade para personalizar seu computador, mas que a configuração final atenda a requisitos mínimos obrigatórios para o funcionamento do sistema.


## 👤 Integrantes

- Gabriel Guzzatti
- Eliandra Motta Cardoso
- Rafael Rodrigues Vieira de Carvalho
- Wallace da Silva Mendes

---
